import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { sectionContent } from '../data/sections';

const work = [
  'Identidad visual y sistemas de marca',
  'Interfaces web con jerarquía editorial',
  'Componentes UI documentables',
  'Dirección visual para productos digitales',
];

export function CreativeWork() {
  return (
    <section className="border-y border-line py-20">
      <Container>
        <SectionHeader {...sectionContent.creativeWork} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {work.map((item, index) => (
            <article key={item} className="rounded-lg border border-line bg-panel p-5">
              <p className="font-mono text-xs text-accent">0{index + 1}</p>
              <h3 className="mt-8 text-lg font-semibold text-primary">{item}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
