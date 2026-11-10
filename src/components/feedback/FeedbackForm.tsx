'use client'

// Copied from personal_site/snippets/feedback. Local changes: `initialCategory` and
// `metadata` props, so the floating button can preset a bug report and add page context.
// Usage:
//   <FeedbackForm app="daybell" appKey="fbk_..." endpoint="https://<ref>.supabase.co/functions/v1/feedback"
//                 turnstileSiteKey="0x4AAAAAAF4paQ331vgzRXSm" />
// Unstyled apart from a few layout rules; every element has a `feedback-*` class to restyle.

import { useEffect, useRef, useState } from 'react'
import { sendFeedback, type FeedbackCategory } from './sendFeedback'

type Props = {
  app: string
  appKey: string
  endpoint: string
  turnstileSiteKey: string
  appVersion?: string
  userId?: string
  initialCategory?: FeedbackCategory
  /** Extra fields merged into the metadata the form sends. */
  metadata?: Record<string, unknown>
  onSubmitted?: () => void
}

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
    }
  }
}

const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
let turnstileLoader: Promise<void> | null = null

function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  turnstileLoader ??= new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = TURNSTILE_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => {
      turnstileLoader = null
      reject(new Error('Failed to load Turnstile'))
    }
    document.head.appendChild(script)
  })
  return turnstileLoader
}

export function FeedbackForm({
  app,
  appKey,
  endpoint,
  turnstileSiteKey,
  appVersion,
  userId,
  initialCategory = 'bug',
  metadata,
  onSubmitted,
}: Props) {
  const [category, setCategory] = useState<FeedbackCategory>(initialCategory)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [token, setToken] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const widgetEl = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | undefined>(undefined)

  useEffect(() => {
    let cancelled = false
    loadTurnstile()
      .then(() => {
        if (cancelled || !widgetEl.current || !window.turnstile) return
        widgetId.current = window.turnstile.render(widgetEl.current, {
          sitekey: turnstileSiteKey,
          callback: (t: string) => setToken(t),
          'expired-callback': () => setToken(''),
          'error-callback': () => setToken(''),
        })
      })
      .catch(() => setError('Could not load the captcha. Disable blockers and reload.'))
    return () => {
      cancelled = true
      if (widgetId.current) window.turnstile?.remove(widgetId.current)
      widgetId.current = undefined
    }
  }, [turnstileSiteKey])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!message.trim()) return
    if (!token) {
      setState('error')
      setError('Please complete the captcha.')
      return
    }

    setState('sending')
    setError('')
    const result = await sendFeedback(endpoint, {
      app,
      key: appKey,
      category,
      message,
      rating,
      contact_email: email || null,
      app_version: appVersion ?? null,
      platform: 'web',
      user_id: userId ?? null,
      metadata: {
        ...metadata,
        userAgent: navigator.userAgent,
        language: navigator.language,
        url: window.location.href,
        screen: `${window.screen.width}x${window.screen.height}`,
      },
      turnstileToken: token,
      website,
    })

    // Turnstile tokens are single-use; get a fresh one either way.
    setToken('')
    window.turnstile?.reset(widgetId.current)

    if (result.ok) {
      setState('success')
      setMessage('')
      setRating(null)
      onSubmitted?.()
    } else {
      setState('error')
      setError(result.message)
    }
  }

  if (state === 'success') {
    return (
      <div className="feedback-success" role="status">
        <p>Thanks! Your feedback was sent.</p>
        <button type="button" className="feedback-button" onClick={() => setState('idle')}>
          Send more
        </button>
      </div>
    )
  }

  return (
    <form className="feedback-form" onSubmit={onSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
      <label className="feedback-field">
        <span>Type</span>
        <select value={category} onChange={e => setCategory(e.target.value as FeedbackCategory)}>
          <option value="bug">Bug</option>
          <option value="idea">Idea</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label className="feedback-field">
        <span>Message</span>
        <textarea
          required
          maxLength={5000}
          rows={5}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </label>

      <fieldset className="feedback-rating" style={{ border: 0, padding: 0 }}>
        <legend>Rating (optional)</legend>
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            type="button"
            className="feedback-rating-star"
            aria-pressed={rating === n}
            aria-label={`${n} star${n > 1 ? 's' : ''}`}
            onClick={() => setRating(rating === n ? null : n)}
          >
            {rating !== null && n <= rating ? '★' : '☆'}
          </button>
        ))}
      </fieldset>

      <label className="feedback-field">
        <span>Email (optional, if you want a reply)</span>
        <input type="email" maxLength={254} value={email} onChange={e => setEmail(e.target.value)} />
      </label>

      {/* Honeypot: hidden from people, tempting for bots. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} />
        </label>
      </div>

      <div ref={widgetEl} className="feedback-captcha" />

      {state === 'error' && error && (
        <p className="feedback-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="feedback-button" disabled={state === 'sending' || !message.trim()}>
        {state === 'sending' ? 'Sending…' : 'Send feedback'}
      </button>
    </form>
  )
}

export default FeedbackForm
