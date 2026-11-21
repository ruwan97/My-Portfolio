# Ruwan Chamikara — Portfolio

Modern, dark, animated developer portfolio.
**Live:** https://ruwan97.github.io/My-Portfolio/

Built with **React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion (Framer Motion)**.

## Edit content
All text, skills, experience and projects live in **`src/data/profile.ts`**.
You can edit it straight from the GitHub mobile app or github.com — every push to `main` redeploys automatically.

- `email` — add your email to show an "Email me" button
- `cv` — upload `public/cv.pdf` and set `cv: '/cv.pdf'` to show a "Download CV" button
- `education[0].degree` — add your degree

## Hosting (free, GitHub Pages)
1. Repo: `ruwan97/My-Portfolio` (must be public for free GitHub Pages).
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.

## Run locally
```bash
npm install
npm run dev
```
