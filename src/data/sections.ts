import type { SectionCopy } from '../types/content';

export const sectionContent = {
  about: {
    eyebrow: 'Perfil',
    title: 'Perfil multidisciplinario para llevar una idea desde la planificación hasta el producto final.',
  },
  techStack: {
    eyebrow: 'Stack',
    title: 'Herramientas para diseñar, desarrollar y entregar productos completos.',
    description:
      'La tecnología se organiza por función: interfaz, backend, diseño y entrega. El detalle final se reemplaza fácilmente desde los datos del proyecto.',
  },
  education: {
    eyebrow: 'Educación',
    title: 'Formación académica, cursos y certificaciones que respaldan mi desarrollo profesional.',
  },
  projects: {
    eyebrow: 'Proyectos',
    title: 'Casos que conectan estructura técnica, experiencia de usuario y dirección visual.',
    description:
      'El contenido actual es placeholder profesional. Cada tarjeta está preparada para rol, stack, repositorio, demo e indicadores reales.',
  },
  experience: {
    eyebrow: 'Experiencia',
    title: 'Trabajo organizado por responsabilidad, impacto y herramientas.',
  },
  creativeWork: {
    eyebrow: 'Diseño',
    title: 'Criterio visual aplicado a productos que deben entenderse rápido.',
    description:
      'El diseño no aparece como decoración; ordena información, baja fricción y hace que la solución se sienta confiable.',
  },
  process: {
    eyebrow: 'Proceso',
    title: 'Del diagnóstico al despliegue con documentación suficiente para evolucionar.',
  },
  contact: {
    eyebrow: 'Contacto',
    title:
      'Si necesitas construir una interfaz, un sistema web o una identidad digital con base técnica sólida, podemos conversar.',
  },
} satisfies Record<string, SectionCopy>;
