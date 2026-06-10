import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { processSteps } from '../data/site';

export function Process() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Proceso"
          title="Del diagnóstico al despliegue con documentación suficiente para evolucionar."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-line bg-panel p-5">
              <p className="font-mono text-xs uppercase text-accent">Paso {index + 1}</p>
              <h3 className="mt-4 text-lg font-semibold text-primary">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
