import { Code2, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { TerminalCard } from '../components/TerminalCard';
import { profile } from '../data/profile';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-line py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,166,87,0.13),transparent_32rem)]" />
      <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase text-accent">
            <Code2 size={16} aria-hidden="true" />
            Ingeniería / Interfaz / Identidad
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-primary sm:text-6xl">
            {profile.summary}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{profile.role}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden="true" />
              Conversar
            </Button>
            <Button href="#proyectos" variant="secondary">
              Ver proyectos
            </Button>
            <Button
              href={`${import.meta.env.BASE_URL}cv-jesus-rojas.pdf`}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir CV de Jesús Rojas en PDF en una pestaña nueva"
            >
              <FileText size={16} aria-hidden="true" />
              CV
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <TerminalCard
            lines={[
              'const profile = {',
              `  location: "${profile.location}",`,
              '  focus: ["software", "design", "systems"],',
              '  output: "productos digitales claros",',
              '  deploy: "static-first / GitHub Pages"',
              '};',
            ]}
          />
        </motion.div>
      </Container>
    </section>
  );
}
