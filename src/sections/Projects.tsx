import { useMemo, useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { projects } from '../data/projects';
import type { ProjectType } from '../types/content';
import { cn } from '../lib/utils';

const filters: Array<ProjectType | 'Todos'> = ['Todos', 'Full Stack', 'Frontend', 'Backend', 'UX/UI', 'Branding'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectType | 'Todos'>('Todos');
  const filteredProjects = useMemo(
    () =>
      activeFilter === 'Todos'
        ? projects
        : projects.filter((project) => project.type === activeFilter),
    [activeFilter],
  );

  return (
    <section id="proyectos" className="border-y border-line bg-soft/40 py-20">
      <Container>
        <SectionHeader
          eyebrow="Proyectos"
          title="Casos que conectan estructura técnica, experiencia de usuario y dirección visual."
          description="El contenido actual es placeholder profesional. Cada tarjeta está preparada para rol, stack, repositorio, demo e indicadores reales."
        />
        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filtros de proyectos">
          {filters.map((filter) => (
            <button
              key={filter}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-semibold transition',
                activeFilter === filter
                  ? 'border-accent bg-accent text-ink'
                  : 'border-line bg-panel text-muted hover:text-primary',
              )}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
