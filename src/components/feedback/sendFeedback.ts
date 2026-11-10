// Copy into your app. Shared by web/FeedbackForm.tsx and mobile/FeedbackModal.tsx.
// Plain fetch, no dependencies; works in browsers and React Native.

export type FeedbackCategory = 'bug' | 'idea' | 'other'
export type FeedbackPlatform = 'web' | 'ios' | 'android'

export type FeedbackPayload = {
  app: string
  key: string
  category: FeedbackCategory
  message: string
  rating?: number | null
  contact_email?: string | null
  app_version?: string | null
  platform?: FeedbackPlatform | null
  user_id?: string | null
  metadata?: Record<string, unknown>
  /** Web keys only. */
  turnstileToken?: string
  /** Honeypot: must stay empty. Pass through whatever the hidden field holds. */
  website?: string
}

export type FeedbackResult =
  | { ok: true; id?: string }
  | {
      ok: false
      /** Machine-readable code from the server, or 'network_error' / 'timeout'. */
      error: string
      message: string
      status?: number
      /** True when trying again later could succeed (network, 429, 5xx). */
      retryable: boolean
    }

export async function sendFeedback(
  endpoint: string,
  payload: FeedbackPayload,
  { timeoutMs = 15000 }: { timeoutMs?: number } = {},
): Promise<FeedbackResult> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)

  let res: Response
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
  } catch (err) {
    const timedOut = (err as Error)?.name === 'AbortError'
    return {
      ok: false,
      error: timedOut ? 'timeout' : 'network_error',
      message: timedOut ? 'The request timed out.' : 'Could not reach the server. Check your connection.',
      retryable: true,
    }
  } finally {
    clearTimeout(timer)
  }

  let body: { ok?: boolean; id?: string; error?: string; message?: string } = {}
  try {
    body = await res.json()
  } catch {
    // non-JSON response (e.g. a proxy error page)
  }

  if (res.ok && body.ok !== false) return { ok: true, id: body.id }

  return {
    ok: false,
    error: body.error ?? 'http_error',
    message: body.message ?? `Request failed (${res.status}).`,
    status: res.status,
    retryable: res.status === 429 || res.status >= 500,
  }
}
