# Surgent Web Template

React template for Surgent AI App Builder.

## Stack

- **Runtime**: Bun
- **Framework**: React 19 + Vite 7 + TypeScript
- **Routing**: React Router 7
- **Styling**: Tailwind CSS 4 (OKLCH colors)
- **State**: Zustand (global) + React Query (server)
- **Forms**: React Hook Form + Zod
- **UI**: 60+ shadcn/ui components (Radix primitives) in `src/components/ui/`
- **Backend**: Convex (optional)

## Structure

```
src/
├── components/
│   ├── ui/           # shadcn components (Button, Card, Dialog, Form, Table...)
│   └── error/        # ErrorBoundary, RouteErrorBoundary
├── hooks/            # useIsMobile, custom hooks
├── lib/              # cn(), errorReporter
├── pages/            # Route components
├── main.tsx          # App entry + route definitions
└── index.css         # Tailwind + theme variables
```

## Scripts

```bash
bun dev          # Dev server (localhost:3000)
bun build        # Production build
bun typecheck    # Type check
bun dev:convex   # Dev with Convex sync
```

## Adding Pages & Routes

1. Create page in `src/pages/dashboard.tsx`:
```tsx
export default function DashboardPage() {
  return <div>Dashboard</div>
}
```

2. Add route in `src/main.tsx` inside the `routes` array:
```tsx
import DashboardPage from '@/pages/dashboard'
import { RouteErrorBoundary } from '@/components/error/route-error-boundary'

// Add to createBrowserRouter routes array:
{
  path: '/dashboard',
  element: <DashboardPage />,
  errorElement: <RouteErrorBoundary />,
}
```

## Patterns

```tsx
// src/ imports - use @/ alias
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Convex imports - use @convex alias (resolves to ./convex/_generated/)
import { api } from "@convex/api"

// Conditional classes with cn()
<div className={cn('base', isActive && 'active')} />

// Mobile detection (768px breakpoint)
const isMobile = useIsMobile()
```

## Styling

Theme variables in `src/index.css` using OKLCH:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
}
```

## Naming

- Files: `kebab-case.tsx`
- Components: `PascalCase`
- Hooks: `use-kebab-case.ts`

## Rules

1. **Use Bun** - never npm/yarn/pnpm
2. **Use existing shadcn components** from `src/components/ui/` before creating new ones
3. **Imports**:
   - Use `@/` for `src/` imports: `import { Button } from '@/components/ui/button'`
   - Use `@convex/` for Convex generated code: `import { api } from "@convex/api"` (NEVER use `convex/_generated/api` — breaks in Vite 7)
4. **Toasts** - use `sonner` (already configured in main.tsx):
   ```tsx
   import { toast } from "sonner"
   toast.success("Done!")
   toast.error("Failed")
   ```
5. **Run `bun typecheck`** before committing
6. **Keep it simple** - build MVPs first

## Convex Integration

When Convex is added to the project:

```tsx
// Queries/mutations - use hooks
import { useQuery, useMutation, useAction } from "convex/react"
import { api } from "@convex/api"

const data = useQuery(api.messages.list)
const send = useMutation(api.messages.send)
const doAction = useAction(api.pay.checkout)

// Call mutations/actions
await send({ text: "hello" })
const result = await doAction({ productSlug: "pro" })
```

ConvexProvider is added to main.tsx when convex is initialized.
