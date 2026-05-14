import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../components/Container';
import { profile } from '../data/profile';
import { site } from '../data/site';

export function SiteLayout({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ink text-primary">
      <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
        <Container className="flex min-h-16 items-center justify-between">
          <a className="font-mono text-sm font-semibold text-primary" href="#inicio">
            {profile.name}
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
            {site.navigation.map((item) => (
              <a
                key={item.href}
                className="text-sm font-medium text-muted transition hover:text-primary"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-primary md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Cerrar navegación' : 'Abrir navegación'}
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </Container>
        {isOpen ? (
          <Container className="pb-4 md:hidden">
            <nav className="grid gap-2" aria-label="Navegación móvil">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  className="rounded-md border border-line bg-panel px-4 py-3 text-sm font-medium text-muted transition hover:text-primary"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </Container>
        ) : null}
      </header>
      <main>{children}</main>
      <footer className="border-t border-line py-8">
        <Container className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Diseñado y desarrollado con React, TypeScript y criterio visual propio.</p>
          <p className="font-mono">© 2026</p>
        </Container>
      </footer>
    </div>
  );
}
