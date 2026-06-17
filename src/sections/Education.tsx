import { Chip } from '../components/Chip';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { education } from '../data/education';
import { sectionContent } from '../data/sections';

export function Education() {
  return (
    <section id="educacion" className="border-b border-line py-20">
      <Container>
        <SectionHeader {...sectionContent.education} />
        <div className="space-y-5">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.title}`}
              className="grid gap-5 rounded-lg border border-line bg-panel p-5 md:grid-cols-[0.32fr_1fr]"
            >
              <div>
                <p className="font-mono text-xs uppercase text-accent">{item.type}</p>
                <p className="mt-3 font-mono text-xs uppercase text-muted">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-secondary">{item.institution}</p>
              </div>
              <div>
                <p className="leading-7 text-muted">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.topics.map((topic) => (
                    <Chip key={topic}>{topic}</Chip>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
