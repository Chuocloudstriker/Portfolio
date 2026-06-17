import type { SkillGroup } from '../types/content';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'MySQL', 'Node.js', 'APIs REST', 'Bases de datos'],
  },
  {
    title: 'Diseño / Gamedev',
    items: ['Adobe Illustrator', 'Adobe Photoshop', 'UX/UI', 'Unity', 'Godot', 'Modelaje 3D', 'Animación'],
  },
  {
    title: 'DevOps / Entrega',
    items: ['Git', 'GitHub Actions', 'Testing', 'Documentación', 'Deploy estático'],
  },
  {
    title: 'IA aplicada',
    items: [
      'Spec-Driven Development',
      'Test-Driven Development',
      'Prompt Efficiency',
      'Depuración de código asistida',
    ],
  },
];
