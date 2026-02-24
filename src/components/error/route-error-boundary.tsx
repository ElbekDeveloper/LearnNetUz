import { useRouteError, isRouteErrorResponse } from 'react-router';
import { useEffect } from 'react';
import { errorReporter } from '@/lib/errorReporter';
import { ErrorFallback } from '@/components/error/fallback';

export function RouteErrorBoundary() {
  const error = useRouteError();

  useEffect(() => {
    if (!error) return;

    let message = 'Unknown route error';
    let stack = '';

    if (isRouteErrorResponse(error)) {
      message = `Route Error ${error.status}: ${error.statusText}`;
    } else if (error instanceof Error) {
      message = error.message;
      stack = error.stack || '';
    } else if (typeof error === 'string') {
      message = error;
    }

    errorReporter.reportRouteError(message, stack);
  }, [error]);

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorFallback
        title={`${error.status} ${error.statusText}`}
        error={error.data ? { message: JSON.stringify(error.data, null, 2) } : undefined}
      />
    );
  }

  return <ErrorFallback error={error instanceof Error ? error : undefined} />;
}
