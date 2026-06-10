import type { IconType } from 'react-icons';
import {
  SiCplusplus,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiUnity,
  SiVite,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { technologies, type TechnologyIcon } from '../data/technologies';

const icons: Record<TechnologyIcon, IconType> = {
  csharp: TbBrandCSharp,
  cplusplus: SiCplusplus,
  css: SiCss,
  html: SiHtml5,
  javascript: SiJavascript,
  mysql: SiMysql,
  node: SiNodedotjs,
  postgresql: SiPostgresql,
  python: SiPython,
  react: SiReact,
  sqlite: SiSqlite,
  tailwind: SiTailwindcss,
  unity: SiUnity,
  vite: SiVite,
};

function TechnologyList() {
  return (
    <div className="flex shrink-0 items-center gap-5 pr-5 sm:gap-8 sm:pr-8">
      {technologies.map((technology) => {
        const Icon = icons[technology.icon];

        return (
          <div
            key={technology.name}
            className="group flex min-w-max items-center gap-3 rounded-full border border-line bg-panel/70 px-4 py-3 text-muted transition hover:border-accent/60 hover:text-accent"
          >
            <Icon
              className="text-2xl text-accent/75 transition group-hover:text-accent"
              aria-hidden="true"
            />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider">
              {technology.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function TechnologyMarquee() {
  return (
    <section
      className="technology-marquee border-y border-line bg-console py-5"
      aria-label="Lenguajes y tecnologías"
    >
      <div className="technology-marquee-track flex w-max">
        <TechnologyList />
        <div aria-hidden="true">
          <TechnologyList />
        </div>
      </div>
    </section>
  );
}
