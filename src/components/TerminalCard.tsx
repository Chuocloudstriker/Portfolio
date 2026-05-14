import type { PropsWithChildren } from 'react';

type TerminalCardProps = PropsWithChildren<{
  title?: string;
  lines?: string[];
}>;

export function TerminalCard({ children, title = 'portfolio.config.ts', lines }: TerminalCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-console shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between border-b border-line bg-panel px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#c9823a]" />
          <span className="h-3 w-3 rounded-full bg-[#d8a657]" />
          <span className="h-3 w-3 rounded-full bg-[#8fae7e]" />
        </div>
        <span className="font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-5 font-mono text-sm leading-7 text-primary">
        {lines ? (
          <pre className="whitespace-pre-wrap">
            {lines.map((line, index) => (
              <span key={line}>
                <span className="select-none text-muted/70">{String(index + 1).padStart(2, '0')} </span>
                {line}
                {'\n'}
              </span>
            ))}
          </pre>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
