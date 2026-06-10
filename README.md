# Portfolio

Portafolio profesional estático para un perfil híbrido de ingeniería informática, desarrollo full stack y diseño gráfico.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Icons
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
- `technologies.ts`: tecnologías e identificadores de los logos del cintillo.
- `site.ts`: navegación y pasos de proceso.

Los recursos públicos, como el CV, favicon, sitemap e imagen Open Graph, viven en `public/`. La carpeta `dist/` es generada por Vite y no debe editarse manualmente.

## CV

El archivo actual está en:

```text
public/cv-jesus-rojas.pdf
```

Todavía falta conectar el botón `CV` de `src/sections/Hero.tsx`. Para respetar la subruta de GitHub Pages, el enlace debe construirse con:

```tsx
`${import.meta.env.BASE_URL}cv-jesus-rojas.pdf`
```

## Deploy en GitHub Pages

El workflow está en `.github/workflows/deploy.yml` y publica automáticamente cada cambio enviado a `main`.

- Repositorio: `Chuocloudstriker/Portfolio`
- URL pública: `https://chuocloudstriker.github.io/Portfolio/`
- Fuente de publicación requerida en GitHub: `GitHub Actions`
- Base de Vite configurada para producción: `/Portfolio/`

En GitHub, abre `Settings > Pages` y selecciona `GitHub Actions` en `Build and deployment > Source`.

## Pendiente de personalización

- Conectar el botón del CV con `public/cv-jesus-rojas.pdf`.
- Reemplazar los enlaces genéricos de GitHub y LinkedIn.
- Cargar proyectos reales con repositorios, demos y métricas.
- Reemplazar la experiencia y educación de ejemplo con información real.
- Reemplazar o diseñar una imagen Open Graph definitiva.
- Activar GitHub Pages con `GitHub Actions` y validar la URL pública.
