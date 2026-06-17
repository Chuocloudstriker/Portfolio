import { Chip } from '../components/Chip';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { experience } from '../data/experience';
import { sectionContent } from '../data/sections';

export function Experience() {
  return (
    <section id="experiencia" className="py-20">
      <Container>
        <SectionHeader {...sectionContent.experience} />
        <div className="space-y-5">
          {experience.map((item) => (
            <article
              key={`${item.organization}-${item.role}`}
              className="grid gap-5 rounded-lg border border-line bg-panel p-5 md:grid-cols-[0.32fr_1fr]"
            >
              <div>
                <p className="font-mono text-xs uppercase text-accent">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-primary">{item.role}</h3>
                <p className="mt-1 text-sm text-secondary">{item.organization}</p>
              </div>
              <div>
                <p className="leading-7 text-muted">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((stackItem) => (
                    <Chip key={stackItem}>{stackItem}</Chip>
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
