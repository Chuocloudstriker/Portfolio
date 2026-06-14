export type TechnologyIcon =
  | 'csharp'
  | 'cplusplus'
  | 'css'
  | 'html'
  | 'javascript'
  | 'mysql'
  | 'node'
  | 'php'
  | 'postgresql'
  | 'python'
  | 'react'
  | 'sqlite'
  | 'tailwind'
  | 'unity'
  | 'vite';

export type Technology = {
  name: string;
  icon: TechnologyIcon;
};

export const technologies: Technology[] = [
  { name: 'C#', icon: 'csharp' },
  { name: 'C++', icon: 'cplusplus' },
  { name: 'Python', icon: 'python' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'HTML5', icon: 'html' },
  { name: 'CSS3', icon: 'css' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Node.js', icon: 'node' },
  { name: 'PHP', icon: 'php' },
  { name: 'React', icon: 'react' },
  { name: 'Vite', icon: 'vite' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'SQLite', icon: 'sqlite' },
  { name: 'Unity', icon: 'unity' },
];
