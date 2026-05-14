import type { ProcessStep, SiteMeta } from '../types/content';

export const site: SiteMeta = {
  title: 'Portafolio Full Stack y Diseño',
  description:
    'Portafolio profesional de ingeniería informática, desarrollo full stack y diseño gráfico.',
  navigation: [
    { label: 'Perfil', href: '#perfil' },
    { label: 'Stack', href: '#stack' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' },
  ],
};

export const processSteps: ProcessStep[] = [
  {
    title: 'Diagnóstico',
    description: 'Ordeno objetivos, restricciones, audiencia y criterios de éxito antes de diseñar.',
  },
  {
    title: 'Arquitectura',
    description: 'Defino estructura, modelo de datos, flujos y decisiones técnicas sostenibles.',
  },
  {
    title: 'Interfaz',
    description: 'Diseño experiencias claras con jerarquía visual, accesibilidad y coherencia de marca.',
  },
  {
    title: 'Desarrollo',
    description: 'Construyo, integro, valido y documento para que el producto pueda evolucionar.',
  },
];
