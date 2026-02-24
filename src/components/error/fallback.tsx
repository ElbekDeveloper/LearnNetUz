import { useState, useMemo } from 'react';
import { AlertTriangle, RefreshCw, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ErrorFallbackProps {
  title?: string;
  error?: Error | { message: string };
  onRetry?: () => void;
}

export function ErrorFallback({
  title = "Something went wrong",
  error,
  onRetry,
}: ErrorFallbackProps) {
  const [copied, setCopied] = useState(false);

  const errorMessage = useMemo(() => (
    error?.message || 'Unknown error'
  ), [error]);

  const errorStack = useMemo(() => (
    error && 'stack' in error ? error.stack || '' : ''
  ), [error]);

  const aiPrompt = useMemo(() => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    return [
      `Fix this error: ${errorMessage}`,
      `URL: ${url}`,
      errorStack ? `\nStack:\n${errorStack}` : '',
    ].filter(Boolean).join('\n');
  }, [errorMessage, errorStack]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(aiPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this:', aiPrompt);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg">
        <CardContent className="p-6 space-y-5">
          <div className="text-center space-y-3">
            <div className="mx-auto w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>

          {errorMessage && (
            <pre className="whitespace-pre-wrap font-mono text-xs text-destructive bg-destructive/5 border border-destructive/20 rounded-lg p-4">
              {errorMessage}
            </pre>
          )}

          <div className="flex gap-2">
            <Button onClick={onRetry || (() => window.location.reload())} variant="outline" className="flex-1">
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
            <Button onClick={handleCopy} variant={copied ? "default" : "outline"} className="flex-1">
              {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? 'Copied!' : 'Copy for AI'}
            </Button>
          </div>

          {errorStack && (
            <details className="text-left">
              <summary className="cursor-pointer text-xs text-muted-foreground hover:text-foreground">
                Stack trace
              </summary>
              <pre className="mt-2 max-h-48 overflow-auto whitespace-pre-wrap font-mono text-[10px] text-muted-foreground bg-muted/40 rounded-md p-3">
                {errorStack}
              </pre>
            </details>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
