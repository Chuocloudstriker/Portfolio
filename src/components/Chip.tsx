import type { PropsWithChildren } from 'react';

export function Chip({ children }: PropsWithChildren) {
  return (
    <span className="rounded-full border border-line bg-soft px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
