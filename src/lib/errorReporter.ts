// Error reporter that posts errors to parent window via postMessage
// Used when app runs in an iframe - parent handles display/logging

interface ErrorPayload {
  type: 'error';
  payload: {
    message: string;
    stack?: string;
    url: string;
    timestamp: string;
    source: 'global' | 'promise' | 'react' | 'react-router';
  };
}

class ErrorReporter {
  private reported = new Set<string>();

  init() {
    if (typeof window === 'undefined') return;

    // Mark app error reporter as ready (disables index.html fallback)
    (window as any).errorReporterReady = true;

    // Global errors
    window.onerror = (msg, _src, _line, _col, error) => {
      // Skip cross-origin "Script error" — browser strips details, nothing actionable
      if (!error && /^script error\.?$/i.test(String(msg))) return false;
      this.postToParent(String(msg), error?.stack, 'global');
      return false;
    };

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (e) => {
      this.postToParent(
        e.reason?.message || 'Unhandled Promise Rejection',
        e.reason?.stack,
        'promise'
      );
    });
  }

  private postToParent(
    message: string,
    stack?: string,
    source: ErrorPayload['payload']['source'] = 'global'
  ) {
    // Simple deduplication (5 second window)
    const key = message.slice(0, 100);
    if (this.reported.has(key)) return;
    this.reported.add(key);
    setTimeout(() => this.reported.delete(key), 5000);

    const payload: ErrorPayload = {
      type: 'error',
      payload: {
        message,
        stack,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        source,
      },
    };

    // Post to parent window (for iframe usage)
    if (window.parent && window.parent !== window) {
      window.parent.postMessage(payload, '*');
    } else {
      // Standalone mode - log to console for debugging
      console.error('[ErrorReporter]', message, stack);
    }
  }

  // For React error boundaries
  reportReactError(error: Error, componentStack?: string) {
    this.postToParent(error.message, error.stack || componentStack, 'react');
  }

  // For React Router errors
  reportRouteError(message: string, stack?: string) {
    this.postToParent(message, stack, 'react-router');
  }
}

export const errorReporter = new ErrorReporter();
errorReporter.init();
