import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { sectionContent } from '../data/sections';
import { skillGroups } from '../data/skills';

export function TechStack() {
  return (
    <section id="stack" className="border-y border-line py-20">
      <Container>
        <SectionHeader {...sectionContent.techStack} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-line bg-panel p-5">
              <h3 className="font-mono text-sm font-semibold uppercase text-accent">{group.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
