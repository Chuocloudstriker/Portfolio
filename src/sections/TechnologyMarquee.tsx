import type { IconType } from 'react-icons';
import {
  SiCplusplus,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiUnity,
  SiVite,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { Container } from '../components/Container';
import { technologies, type TechnologyIcon } from '../data/technologies';

const icons: Record<TechnologyIcon, IconType> = {
  csharp: TbBrandCSharp,
  cplusplus: SiCplusplus,
  css: SiCss,
  html: SiHtml5,
  javascript: SiJavascript,
  mysql: SiMysql,
  node: SiNodedotjs,
  php: SiPhp,
  postgresql: SiPostgresql,
  python: SiPython,
  react: SiReact,
  sqlite: SiSqlite,
  tailwind: SiTailwindcss,
  unity: SiUnity,
  vite: SiVite,
};

type TechnologyListProps = {
  isDuplicate?: boolean;
};

function TechnologyList({ isDuplicate = false }: TechnologyListProps) {
  return (
    <div className="flex shrink-0 items-center gap-5 pr-5 sm:gap-8 sm:pr-8">
      {technologies.map((technology) => {
        const Icon = icons[technology.icon];

        return (
          <a
            key={technology.name}
            href={technology.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isDuplicate ? -1 : undefined}
            aria-label={`Abrir sitio de ${technology.name}`}
            className="group flex min-w-max items-center gap-3 rounded-full border border-line bg-panel/70 px-4 py-3 text-muted transition hover:border-accent/60 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Icon
              className="text-2xl text-accent/75 transition group-hover:text-accent"
              aria-hidden="true"
            />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider">
              {technology.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}

export function TechnologyMarquee() {
  return (
    <section
      className="border-y border-line bg-console py-6"
      aria-label="Lenguajes y tecnologías"
    >
      <Container className="mb-5">
        <p className="font-mono text-xs uppercase text-accent">Tecnologías utilizadas</p>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
          Lenguajes, frameworks y herramientas que he usado en proyectos web, soporte técnico,
          diseño y desarrollo 3D.
        </p>
      </Container>
      <div className="technology-marquee overflow-hidden">
        <div className="technology-marquee-track flex w-max">
          <TechnologyList />
          <div aria-hidden="true">
            <TechnologyList isDuplicate />
          </div>
        </div>
      </div>
    </section>
  );
}
