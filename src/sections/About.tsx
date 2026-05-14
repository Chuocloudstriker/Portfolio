import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/profile';

export function About() {
  return (
    <section id="perfil" className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
        <SectionHeader
          eyebrow="Perfil"
          title="Un perfil híbrido para construir desde la lógica hasta el detalle visual."
        />
        <div className="grid gap-6">
          {profile.bio.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-muted">
              {paragraph}
            </p>
          ))}
          <div className="grid gap-4 rounded-lg border border-line bg-panel p-5 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase text-accent">Roles</p>
              <p className="mt-2 text-sm text-secondary">{profile.secondaryRoles.join(', ')}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase text-accent">Idiomas</p>
              <p className="mt-2 text-sm text-secondary">{profile.languages.join(', ')}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase text-accent">Disponibilidad</p>
              <p className="mt-2 text-sm text-secondary">{profile.availability}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
