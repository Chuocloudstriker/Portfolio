import type { EducationItem } from '../types/content';

export const education: EducationItem[] = [
  {
    type: 'Formación académica',
    title: 'Título o carrera profesional',
    institution: 'Institución académica',
    period: 'Año - Año',
    summary:
      'Describe la formación obtenida, las áreas principales de estudio y los conocimientos más relevantes para tu perfil profesional.',
    topics: ['Área de estudio', 'Especialidad', 'Proyecto destacado'],
  },
  {
    type: 'Certificación',
    title: 'Nombre de la certificación',
    institution: 'Entidad certificadora',
    period: 'Año',
    summary:
      'Explica brevemente las competencias validadas, el alcance de la certificación y su aplicación profesional.',
    topics: ['Competencia', 'Herramienta', 'Tecnología'],
  },
  {
    type: 'Curso',
    title: 'Nombre del curso',
    institution: 'Plataforma o institución',
    period: 'Año',
    summary:
      'Resume los contenidos del curso, las habilidades desarrolladas y cualquier proyecto realizado durante la formación.',
    topics: ['Contenido principal', 'Habilidad adquirida', 'Proyecto final'],
  },
];
