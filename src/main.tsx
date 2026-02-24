import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ErrorBoundary } from '@/components/error/boundary';
import { RouteErrorBoundary } from '@/components/error/route-error-boundary';
import { HomePage } from '@/pages/home'
import '@/index.css'
import { Toaster } from 'sonner'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

// Handle module load failures (e.g., after deployment with stale chunks)
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  window.location.reload();
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  }
]);

// Signal to parent frame that app is ready
const notifyParentReady = () => {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type: 'preview-ready', url: location.href }, '*')
  }
}

// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
      <Toaster />
    </ConvexProvider>
  </StrictMode>,
)

// Notify after initial render completes (with fallbacks)
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(notifyParentReady)
} else {
  setTimeout(notifyParentReady, 0)
}
// Also notify on load as backup in case idle callback is delayed
window.addEventListener('load', notifyParentReady, { once: true })
