import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    name: 'Sistema de gestión modular',
    type: 'Full Stack',
    description: 'Aplicación web para ordenar operaciones, datos y reportes en un flujo centralizado.',
    problem: 'Reduce trabajo manual y dispersión de información entre áreas.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    role: 'Arquitectura, UI, desarrollo frontend y API.',
    highlights: ['Modelo de datos tipado', 'Panel responsive', 'Documentación de flujo'],
    repo: 'https://github.com/',
  },
  {
    name: 'Identidad digital técnica',
    type: 'Branding',
    description: 'Sistema visual para una marca personal con componentes digitales reutilizables.',
    problem: 'Unifica presentación profesional, tono gráfico y presencia web.',
    stack: ['Figma', 'Illustrator', 'React', 'Tailwind CSS'],
    role: 'Dirección visual, diseño de interfaz e implementación.',
    highlights: ['Paleta editorial', 'Componentes accesibles', 'Guía visual base'],
  },
  {
    name: 'Dashboard de producto',
    type: 'Frontend',
    description: 'Interfaz de métricas con filtros, estados claros y jerarquía de información.',
    problem: 'Facilita lectura de indicadores y toma de decisiones operativas.',
    stack: ['React', 'TypeScript', 'Charts', 'Design System'],
    role: 'Diseño UX/UI, implementación y validación responsive.',
    highlights: ['Filtros rápidos', 'Estados vacíos', 'Layout adaptable'],
    demo: 'https://example.com',
  },
];
