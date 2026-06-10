# Portfolio

Portafolio profesional estático para un perfil híbrido de ingeniería informática, desarrollo full stack y diseño gráfico.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Contenido

El contenido editable vive en `src/data` y los tipos en `src/types/content.ts`.

- `profile.ts`: identidad, bio, email y redes.
- `projects.ts`: proyectos, stack, rol, links y highlights.
- `experience.ts`: experiencia profesional.
- `education.ts`: estudios académicos, cursos y certificaciones.
- `skills.ts`: grupos de habilidades.
- `site.ts`: navegación y pasos de proceso.

## Deploy en GitHub Pages

El workflow está en `.github/workflows/deploy.yml` y publica automáticamente cada cambio enviado a `main`.

- Repositorio: `Chuocloudstriker/Portfolio`
- URL pública: `https://chuocloudstriker.github.io/Portfolio/`
- Fuente de publicación requerida en GitHub: `GitHub Actions`
- Base de Vite configurada para producción: `/Portfolio/`

En GitHub, abre `Settings > Pages` y selecciona `GitHub Actions` en `Build and deployment > Source`.

## Pendiente de personalización

- Reemplazar nombre, email y enlaces reales.
- Cargar proyectos reales con repositorios, demos y métricas.
- Ajustar `public/sitemap.xml` cuando exista la URL final.
- Reemplazar o diseñar una imagen Open Graph definitiva.
