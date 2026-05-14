import { Mail } from 'lucide-react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/profile';
import { getExternalLinkProps } from '../lib/utils';

export function Contact() {
  return (
    <section id="contacto" className="py-20">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
        <SectionHeader
          eyebrow="Contacto"
          title="Si necesitas construir una interfaz, un sistema web o una identidad digital con base técnica sólida, podemos conversar."
        />
        <div className="rounded-lg border border-line bg-panel p-6">
          <p className="leading-7 text-muted">
            Contacto inicial por email para mantener el sitio estático, rápido y compatible con GitHub
            Pages. Los enlaces sociales se editan desde los datos del perfil.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </Button>
            {profile.socials
              .filter((link) => link.label !== 'Email')
              .map((link) => (
                <a
                  key={link.label}
                  className="inline-flex min-h-11 items-center rounded-md border border-line px-4 py-2 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
                  href={link.href}
                  {...getExternalLinkProps(link.href)}
                >
                  {link.label}
                </a>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
