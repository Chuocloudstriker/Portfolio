import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn, getExternalLinkProps } from '../lib/utils';

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'secondary' | 'ghost';
  }
>;

export function Button({ children, className, href = '#', variant = 'primary', ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        variant === 'primary' &&
          'border-accent bg-accent text-ink shadow-[0_0_24px_rgba(216,166,87,0.18)] hover:bg-accent-strong',
        variant === 'secondary' &&
          'border-line bg-panel text-primary hover:border-accent hover:text-accent',
        variant === 'ghost' && 'border-transparent text-muted hover:text-primary',
        className,
      )}
      href={href}
      {...getExternalLinkProps(href)}
      {...props}
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  );
}
