"use client";

import {
  Component,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { MessageSquare, X } from "lucide-react";
import type { FeedbackCategory } from "./sendFeedback";

// The form (and the Turnstile script it loads) is only fetched once the panel opens.
const FeedbackForm = dynamic(() => import("./FeedbackForm"), {
  ssr: false,
  loading: () => <p className="text-sm text-gray-500">Loading…</p>,
});

const config = {
  endpoint: process.env.NEXT_PUBLIC_FEEDBACK_ENDPOINT,
  app: process.env.NEXT_PUBLIC_FEEDBACK_APP,
  appKey: process.env.NEXT_PUBLIC_FEEDBACK_KEY,
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
};
const isConfigured = Object.values(config).every(Boolean);

const CLOSE_AFTER_SUCCESS_MS = 2500;

export interface OpenFeedbackOptions {
  category?: FeedbackCategory;
  /** Identifies what the feedback is about, e.g. { episode: 5 } */
  metadata?: Record<string, unknown>;
}

interface FeedbackContextValue {
  /** False when the env vars are missing, so triggers can hide themselves */
  available: boolean;
  open: (options?: OpenFeedbackOptions) => void;
}

const FeedbackContext = createContext<FeedbackContextValue>({
  available: false,
  open: () => {},
});

export const useFeedback = () => useContext(FeedbackContext);

// Keeps a failing form (or a chunk that won't load) from taking the page down with it.
class FeedbackErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) {
      return (
        <p className="text-sm text-gray-600">
          The feedback form couldn&apos;t load. Please try again later.
        </p>
      );
    }
    return this.props.children;
  }
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

interface Session extends OpenFeedbackOptions {
  /** New on every open, so the form starts fresh */
  key: number;
  pageMetadata: Record<string, unknown>;
}

// Floating "Feedback" button fixed bottom-right, plus a panel (a bottom sheet on phones)
// with the feedback form. Pages can open it with useFeedback().open(...).
// A page with its own bottom bar can lift the button by setting --feedback-offset on <body>.
export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const isOpen = session !== null;
  const panelId = useId();
  const titleId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusTo = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );
  const pathname = usePathname();

  const open = useCallback((options: OpenFeedbackOptions = {}) => {
    if (!isConfigured) return;
    clearTimeout(closeTimer.current);
    returnFocusTo.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setSession({
      ...options,
      key: Date.now(),
      pageMetadata: {
        path: window.location.pathname,
        pageTitle: document.title,
      },
    });
  }, []);

  const close = useCallback(({ restoreFocus = true } = {}) => {
    clearTimeout(closeTimer.current);
    setSession(null);
    if (restoreFocus) {
      (returnFocusTo.current ?? buttonRef.current)?.focus();
    }
  }, []);

  useEffect(() => {
    if (isOpen) panelRef.current?.focus();
  }, [isOpen]);

  // Navigating away closes the panel
  useEffect(() => {
    close({ restoreFocus: false });
  }, [pathname, close]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      close({ restoreFocus: false });
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen, close]);

  // Keep Tab cycling inside the panel while it's open
  const onPanelKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !panelRef.current) return;
    const items = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
    ).filter((el) => el.offsetParent !== null);
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === panelRef.current)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const onSubmitted = useCallback(() => {
    closeTimer.current = setTimeout(() => close(), CLOSE_AFTER_SUCCESS_MS);
  }, [close]);

  const value = useMemo(
    () => ({ available: isConfigured, open }),
    [open]
  );

  const bottom =
    "calc(1rem + env(safe-area-inset-bottom) + var(--feedback-offset, 0px))";

  return (
    <FeedbackContext.Provider value={value}>
      {children}
      {isConfigured && (
        <div className="print:hidden">
          <button
            ref={buttonRef}
            type="button"
            onClick={() => (isOpen ? close() : open())}
            aria-label="Send feedback"
            aria-expanded={isOpen}
            aria-controls={panelId}
            aria-haspopup="dialog"
            style={{ bottom }}
            className="fixed right-4 z-40 inline-flex items-center justify-center gap-2 h-12 w-12 sm:h-11 sm:w-auto sm:px-4 rounded-full bg-purple-600 text-white font-medium shadow-lg hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors duration-200"
            data-umami-event="feedback_open"
          >
            <MessageSquare className="w-5 h-5 sm:w-4 sm:h-4" aria-hidden />
            <span className="hidden sm:inline">Feedback</span>
          </button>

          {isOpen && (
            <>
              {/* Dims the page behind the bottom sheet on phones */}
              <div
                className="fixed inset-0 z-40 bg-black/30 sm:hidden"
                aria-hidden
              />
              <div
                ref={panelRef}
                id={panelId}
                role="dialog"
                aria-labelledby={titleId}
                tabIndex={-1}
                onKeyDown={onPanelKeyDown}
                style={{ "--feedback-bottom": bottom } as React.CSSProperties}
                className="feedback-panel fixed z-50 inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-white border border-gray-200 shadow-xl p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] outline-none sm:inset-x-auto sm:right-4 sm:bottom-[calc(var(--feedback-bottom)+3.5rem)] sm:w-[22rem] sm:max-h-[calc(100vh-8rem)] sm:rounded-lg sm:pb-5 motion-safe:animate-feedback-in"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 id={titleId} className="font-semibold text-gray-800">
                      Send feedback
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Found a problem or have an idea? I read every message.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => close()}
                    aria-label="Close feedback"
                    className="shrink-0 -m-1 p-1 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" aria-hidden />
                  </button>
                </div>
                <FeedbackErrorBoundary>
                  <FeedbackForm
                    key={session.key}
                    app={config.app!}
                    appKey={config.appKey!}
                    endpoint={config.endpoint!}
                    turnstileSiteKey={config.turnstileSiteKey!}
                    initialCategory={session.category}
                    metadata={{ ...session.pageMetadata, ...session.metadata }}
                    onSubmitted={onSubmitted}
                  />
                </FeedbackErrorBoundary>
              </div>
            </>
          )}
        </div>
      )}
    </FeedbackContext.Provider>
  );
}
