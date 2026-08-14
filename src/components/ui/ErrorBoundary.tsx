import React from 'react'

interface Props {
  children: React.ReactNode
  /** Optional custom fallback UI. Defaults to a friendly message. */
  fallback?: React.ReactNode
}

interface State {
  hasError: boolean
}

const DEFAULT_FALLBACK = (
  <div
    role="alert"
    className="flex min-h-[200px] flex-col items-center justify-center gap-4 p-8 text-center"
  >
    <p className="text-lg font-medium text-gray-800">
      Something went wrong. Please refresh the page or{' '}
      <a
        href="mailto:info@evergreenarborservices.co.uk"
        className="text-green-700 underline hover:text-green-900"
      >
        contact us
      </a>
      .
    </p>
    <button
      onClick={() => window.location.reload()}
      className="rounded bg-green-700 px-4 py-2 text-sm text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
    >
      Refresh page
    </button>
  </div>
)

/**
 * React error boundary that catches render-phase errors from its children.
 * In production it renders a user-friendly fallback — no stack traces are
 * shown. Satisfies Req 16.4.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_error: unknown): State {
    return { hasError: true }
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo): void {
    // Log to console in development only; avoid leaking details in production
    if (import.meta.env.DEV) {
      console.error('[ErrorBoundary] caught an error:', error, info)
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? DEFAULT_FALLBACK
    }
    return this.props.children
  }
}
