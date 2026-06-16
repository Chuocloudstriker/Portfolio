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
  href: string;
};

export const technologies: Technology[] = [
  { name: 'C#', icon: 'csharp', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
  { name: 'C++', icon: 'cplusplus', href: 'https://isocpp.org/' },
  { name: 'Python', icon: 'python', href: 'https://www.python.org/' },
  {
    name: 'JavaScript',
    icon: 'javascript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  { name: 'HTML5', icon: 'html', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS3', icon: 'css', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Tailwind CSS', icon: 'tailwind', href: 'https://tailwindcss.com/' },
  { name: 'Node.js', icon: 'node', href: 'https://nodejs.org/' },
  { name: 'PHP', icon: 'php', href: 'https://www.php.net/' },
  { name: 'React', icon: 'react', href: 'https://react.dev/learn' },
  { name: 'Vite', icon: 'vite', href: 'https://vite.dev/' },
  { name: 'PostgreSQL', icon: 'postgresql', href: 'https://www.postgresql.org/' },
  { name: 'MySQL', icon: 'mysql', href: 'https://www.mysql.com/' },
  { name: 'SQLite', icon: 'sqlite', href: 'https://www.sqlite.org/' },
  { name: 'Unity', icon: 'unity', href: 'https://unity.com/' },
];
