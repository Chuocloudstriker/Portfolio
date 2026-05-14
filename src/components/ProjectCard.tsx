import { Github, Monitor } from 'lucide-react';
import { Chip } from './Chip';
import { getExternalLinkProps } from '../lib/utils';
import type { Project } from '../types/content';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid h-full gap-5 rounded-lg border border-line bg-panel p-5 transition hover:-translate-y-1 hover:border-accent/70">
      <div>
        <p className="mb-3 font-mono text-xs uppercase text-accent">{project.type}</p>
        <h3 className="text-xl font-semibold text-primary">{project.name}</h3>
        <p className="mt-3 leading-7 text-muted">{project.description}</p>
      </div>
      <p className="border-l border-accent/50 pl-4 text-sm leading-6 text-secondary">
        {project.problem}
      </p>
      <p className="text-sm leading-6 text-muted">
        <span className="font-mono text-xs uppercase text-accent">Rol:</span> {project.role}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
      <ul className="space-y-2 text-sm text-muted">
        {project.highlights.map((highlight) => (
          <li key={highlight}>/ {highlight}</li>
        ))}
      </ul>
      <div className="mt-auto flex gap-3">
        {project.repo ? (
          <a
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
            href={project.repo}
            aria-label={`Repositorio de ${project.name}`}
            {...getExternalLinkProps(project.repo)}
          >
            <Github size={16} aria-hidden="true" />
            Repo
          </a>
        ) : null}
        {project.demo ? (
          <a
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
            href={project.demo}
            aria-label={`Demo de ${project.name}`}
            {...getExternalLinkProps(project.demo)}
          >
            <Monitor size={16} aria-hidden="true" />
            Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
