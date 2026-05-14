# Project Context

## Vision

Personal professional portfolio for an Informatics Engineer, Full Stack Developer, Software Engineer, and Graphic Designer. The site communicates a hybrid profile capable of building complete digital products across frontend, backend, UX/UI, branding, documentation, and deployment.

## Goals

- Present a professional, modern, elegant, technical portfolio.
- Communicate software engineering, full stack development, and design capabilities.
- Showcase selected projects with clear role, stack, links, and outcomes.
- Provide a maintainable static site deployable to GitHub Pages.
- Keep content editable through typed data files.
- Maintain documentation for future AI-assisted development.

## Target Audience

- Recruiters and technical hiring teams.
- Potential freelance or consulting clients.
- Product, design, and engineering collaborators.
- Visitors evaluating both technical and visual judgment.

## Design Direction

Dark warm editorial interface inspired by technical documentation, classic terminal aesthetics, sepia tones, old code consoles, and premium minimalism.

Palette:

- Background: `#1B1410`
- Panel: `#241B16`
- Primary text: `#F3E7D3`
- Secondary text: `#BFA98A`
- Accent: `#D8A657`, `#C9823A`, `#8FAE7E`
- Borders: `rgba(243, 231, 211, 0.14)`

Principles:

- Mobile-first responsive layout.
- Strong hierarchy and readable typography.
- Subtle animation.
- Terminal-inspired details.
- Editorial spacing.
- Accessible contrast.
- Avoid generic SaaS visual language.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Typed TypeScript data files
- GitHub Pages
- GitHub Actions

## Architecture

Static frontend application with separated concerns:

- Data in `src/data`.
- Types in `src/types`.
- Reusable UI in `src/components`.
- Page sections in `src/sections`.
- Layout shell in `src/layouts`.
- Shared helpers in `src/lib`.

No backend in v1. Contact uses `mailto` for GitHub Pages compatibility.

## Site Map

Initial one-page structure:

- Hero
- About
- Tech Stack
- Projects
- Experience
- Design / Creative Work
- Process
- Contact
- Footer

Potential future additions:

- Blog / Notes
- Individual project pages
- Downloadable CV
- Bilingual support
- Theme switcher

## Content Inventory

Current content is professional placeholder content. Pending real user input:

- Professional identity
- Technical skills
- Design skills
- Projects
- Experience
- Education
- Social links
- Contact details
- Visual preferences
- Repository and deploy details

## Data Model

Initial data groups:

- Profile
- Site metadata
- Skills
- Projects
- Experience
- Social links
- Process steps

## Components

Implemented components:

- SiteLayout
- Container
- SectionHeader
- Button
- Chip
- TerminalCard
- ProjectCard

## Decisions Log

- 2026-05-13: Repository inspected. Git repository exists but no project files were present.
- 2026-05-13: Stack selected: Vite + React + TypeScript + Tailwind CSS for GitHub Pages static deployment.
- 2026-05-13: Initial architecture uses typed local data files instead of backend.
- 2026-05-13: First one-page portfolio scaffold implemented with editable placeholder content.
- 2026-05-13: HTML public asset paths updated to respect Vite `base` for GitHub Pages subpath deploys.
- 2026-05-13: Session closed after verifying lint/build, validating GitHub Pages subpath behavior, and stopping the local Vite dev server.

## Current Stage

Stage 4: First complete one-page implementation. Stage 5 and 6 basics are included through metadata, public assets, and GitHub Pages workflow.

## Latest Session Status

- Local development server was stopped before closing the session.
- `npm run lint` passed.
- `npm run build` passed.
- `VITE_BASE_PATH=/Portfolio/ npm run build` passed.
- `git status --short` still shows the scaffold files as untracked because no initial commit has been made yet.
- No real portfolio content has been collected or applied yet; current data files still contain professional placeholders.

## Completed Tasks

- Project scaffold created.
- TypeScript, Vite, Tailwind, ESLint, and Prettier configuration added.
- Typed data files created.
- Main sections implemented.
- Sepia terminal-inspired visual system implemented.
- Basic SEO assets and GitHub Pages workflow added.
- GitHub Pages subpath compatibility verified for favicon, Open Graph image, JS, and CSS asset paths.

## Pending Tasks

- Collect professional and content information.
- Confirm repository name for GitHub Pages base path.
- Confirm final public URL and update sitemap.
- Replace placeholder profile, project, experience, and contact details.
- Add real CV asset if needed.
- Validate published GitHub Pages deployment.

## Next Steps

1. Replace placeholder content in `src/data`.
2. Confirm repository name and set `VITE_BASE_PATH` if needed.
3. Run local QA across mobile and desktop.
4. Publish through GitHub Pages.

## Notes for AI Assistants

- Preserve the sepia, technical, editorial, terminal-inspired direction.
- Avoid generic SaaS/startup visual patterns.
- Keep content separated from components.
- Keep the project static-first for GitHub Pages.
- Update this file after every meaningful project stage.
- Do not introduce backend complexity unless explicitly required.
