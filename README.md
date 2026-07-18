# Lu Hao — Academic Portfolio

Source for [luhao1995cn.github.io](https://luhao1995cn.github.io), an original, static-exported Next.js academic portfolio for Dr. Lu Hao's work in condensed-matter physics, functional oxides, thin films, MEMS, and infrared devices.

This is an independent repository and deployment. The earlier `LuHao95CN/LuHao95CN.github.io` site remains untouched.

## What is included

- Next.js 16, TypeScript, App Router, Tailwind CSS 4, and Framer Motion
- Home, About, Research, Publications, Experience, Insights, CV, and Contact pages
- Eleven migrated research notes with legacy URL compatibility and KaTeX rendering
- Structured content files for profile, research, publications, experience, and navigation
- Responsive navigation, accessible interactions, reduced-motion support, and print-ready web CV
- Metadata, Open Graph image, JSON-LD, sitemap, robots, manifest, and custom 404 page
- Optimized local imagery derived from owner-supplied and existing site assets
- Static export and GitHub Actions deployment for the root GitHub Pages domain

## Content policy

The site uses claims found in the previous website, the owner-supplied CV or independently verifiable public records. Incomplete or conflicting records are labeled rather than guessed. The source CV itself is not copied into the repository or deployed site; birth data, gender, nationality, street address, telephone number, private email and third-party email addresses are deliberately excluded. Migrated research notes are retained as Markdown in `content/insights/`.

## Local development

Node.js 24 is recommended to match the deployment workflow.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful commands:

```bash
npm run lint          # ESLint
npm run typecheck     # TypeScript validation
npm run build         # static export to out/
npm run check:export  # validate routes and internal references in the export
npm run check         # complete CI-equivalent verification
npm run preview       # serve the generated out/ directory
```

## Content architecture

- `src/data/site.ts` — identity, contact links, navigation, and research positioning
- `src/data/research.ts` — research themes, selected projects, and current focus
- `src/data/publications.ts` — publication records and verification notes
- `src/data/experience.ts` — verified appointments and education disclosures
- `content/insights/` — privacy-reviewed Markdown research notes
- `src/lib/insights.ts` — rendering layer for the Markdown research notes
- `public/assets/` — web-ready derivatives used by the deployed site

## GitHub Pages deployment

The repository is the root site for the `luhao1995cn` GitHub organization, so the production base path is empty. `next.config.ts` uses `output: "export"`, and `.github/workflows/nextjs-pages.yml` validates the project, uploads `out/`, and deploys it when changes reach `main`.

Deployment steps:

1. Push `main` to `luhao1995cn/luhao1995cn.github.io`.
2. In GitHub, set **Settings → Pages → Source** to **GitHub Actions** if it is not already selected.
3. Confirm the **Deploy Next.js site to Pages** workflow completes.
4. Test [luhao1995cn.github.io](https://luhao1995cn.github.io), including legacy `/posts/.../` links.

For a project repository rather than the root user site, set `NEXT_PUBLIC_BASE_PATH` to the repository name (for example `/portfolio`) and set `NEXT_PUBLIC_SITE_URL` to the deployed origin.

## Information still needed from the owner

- Independent public records or PDFs for the listed patent claims
- Confirmation of the two DPG Spring Meeting entries currently labeled 2024
- Confirmation of the incomplete Ru-doped VO₂ publication record
- Preferred licensing/provenance notes for personal and laboratory images
- Optional future custom domain and corresponding `CNAME`

No missing credential, date, publication identifier, or research result has been invented.

## Rights and attribution

Personal text, photographs, research figures, and other content are not relicensed by this README; reuse requires permission from their respective rights holders. Third-party packages retain their own licenses.
