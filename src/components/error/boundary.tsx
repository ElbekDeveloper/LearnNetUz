import { Component, ErrorInfo, ReactNode } from "react";
import { errorReporter } from "@/lib/errorReporter";
import { ErrorFallback } from "@/components/error/fallback";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    errorReporter.reportReactError(error, errorInfo.componentStack || undefined);
  }

  private retry = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError && this.state.error) {
      return (
        <ErrorFallback
          error={this.state.error}
          onRetry={this.retry}
        />
      );
    }
    return this.props.children;
  }
}
