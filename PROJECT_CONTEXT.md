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
- React Icons
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

Current one-page structure:

- Hero
- About
- Technology marquee
- Tech Stack
- Education
- Projects
- Experience
- Design / Creative Work
- Process
- Contact
- Footer

Potential future additions:

- Blog / Notes
- Individual project pages
- Bilingual support
- Theme switcher

## Content Inventory

The profile contains an initial real name and email, but several sections still use professional placeholder content. Pending real user input:

- Technical skills
- Design skills
- Projects
- Experience
- Education
- Social links
- Final copy review

## Data Model

Initial data groups:

- Profile
- Site metadata
- Skills
- Technologies
- Projects
- Experience
- Education
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

Implemented sections:

- Hero
- About
- TechnologyMarquee
- TechStack
- Education
- Projects
- Experience
- CreativeWork
- Process
- Contact

## Decisions Log

- 2026-05-13: Repository inspected. Git repository exists but no project files were present.
- 2026-05-13: Stack selected: Vite + React + TypeScript + Tailwind CSS for GitHub Pages static deployment.
- 2026-05-13: Initial architecture uses typed local data files instead of backend.
- 2026-05-13: First one-page portfolio scaffold implemented with editable placeholder content.
- 2026-05-13: HTML public asset paths updated to respect Vite `base` for GitHub Pages subpath deploys.
- 2026-05-13: Session closed after verifying lint/build, validating GitHub Pages subpath behavior, and stopping the local Vite dev server.
- 2026-06-09: Added a continuous sepia technology marquee between About and Tech Stack using React Icons.
- 2026-06-09: Added C#, C++, Python, JavaScript, HTML5, CSS3, Tailwind CSS, Node.js, React, Vite, PostgreSQL, MySQL, SQLite, and Unity to the marquee.
- 2026-06-09: Added a typed Education section for academic studies, courses, and certifications.
- 2026-06-09: Updated alternating section backgrounds from Stack through Contact.
- 2026-06-09: Configured the GitHub Pages workflow for repository subpath `/Portfolio/`.
- 2026-06-09: Updated sitemap, canonical URL, and Open Graph URL for `https://chuocloudstriker.github.io/Portfolio/`.
- 2026-06-10: Replaced the original favicon with a sepia `JR` monogram.
- 2026-06-10: Completed a project-wide review covering generated files, duplication, accessibility, metadata, and performance.
- 2026-06-10: Added `public/cv-jesus-rojas.pdf`; the Hero button is not linked yet.
- 2026-06-11: Linked the Hero CV button using Vite's base URL and verified `/Portfolio/cv-jesus-rojas.pdf`.
- 2026-06-11: Ignored Windows `Zone.Identifier` metadata and retained the real favicon.

## Current Stage

Content personalization and pre-publication QA. The visual structure and deployment configuration are implemented, but real portfolio content and final publication checks remain.

## Latest Session Status

- `npm run lint` passed on 2026-06-10.
- `npm run build` passed on 2026-06-10.
- `npm audit --omit=dev` reported zero known production vulnerabilities.
- GitHub Pages production assets build correctly for `/Portfolio/`.
- Local `main` and `origin/main` point to `e8de1aa` (`Order and Background chances`).
- `public/cv-jesus-rojas.pdf` is tracked and connected to the Hero download button.
- Windows `Zone.Identifier` metadata is ignored; the previously tracked encoded variant is marked deleted locally.
- `npm run lint`, the default build, and the `/Portfolio/` production build passed on 2026-06-11.
- GitHub Pages returned `404` during the last external check and still needs activation or deployment verification.

## Completed Tasks

- Project scaffold created.
- TypeScript, Vite, Tailwind, ESLint, and Prettier configuration added.
- Typed data files created.
- Main sections implemented.
- Technology marquee implemented with sepia brand icons.
- Education section and typed education data implemented.
- Alternating principal and secondary section backgrounds implemented.
- Custom `JR` favicon implemented.
- Sepia terminal-inspired visual system implemented.
- Basic SEO assets and GitHub Pages workflow added.
- GitHub Pages subpath compatibility verified for favicon, Open Graph image, JS, and CSS asset paths.
- Sitemap and canonical URL configured for the expected GitHub Pages URL.
- CV PDF placed in `public/`.
- Hero CV download linked and verified for local and GitHub Pages base paths.
- Windows download metadata excluded without affecting `public/favicon.svg`.

## Pending Tasks

- Replace generic GitHub, LinkedIn, repository, and demo links.
- Replace placeholder projects, experience, education, and supporting copy.
- Add a persistent pause control for the moving technology marquee.
- Improve Open Graph metadata with an absolute PNG/JPG image and image details.
- Decide whether to consolidate repeated Experience and Education card markup.
- Decide whether to centralize section copy and SEO metadata.
- Add basic automated accessibility or UI checks.
- Activate GitHub Pages using GitHub Actions.
- Validate published GitHub Pages deployment.

## Next Steps

1. Replace placeholder content in `src/data`.
2. Review and commit the current local changes.
3. Push `main`, activate GitHub Pages with GitHub Actions, and validate the public URL.
4. Address the remaining technical review findings.
5. Run final QA across mobile and desktop.

## Notes for AI Assistants

- Preserve the sepia, technical, editorial, terminal-inspired direction.
- Avoid generic SaaS/startup visual patterns.
- Keep content separated from components.
- Keep the project static-first for GitHub Pages.
- Do not edit `dist/`; it is generated by Vite and ignored by Git.
- Update this file after every meaningful project stage.
- Do not introduce backend complexity unless explicitly required.
