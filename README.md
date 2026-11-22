# Ruwan Chamikara — Portfolio

Modern, dark, animated developer portfolio.
**Live:** https://ruwan97.github.io

Built with **React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion (Framer Motion)**.

## Edit content
All text, skills, experience and projects live in **`src/data/profile.ts`**.
You can edit it straight from the GitHub mobile app or github.com — every push to `main` redeploys automatically.

- `email` — add your email to show an "Email me" button
- `cv` — upload `public/cv.pdf` and set `cv: '/cv.pdf'` to show a "Download CV" button
- `education[0].degree` — add your degree

## Hosting (free, GitHub Pages)
1. Repo name must be **`ruwan97.github.io`** and public.
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.

## Firebase Hosting (mirror)
Also deployed to https://ruwan-chamikara.web.app by the same workflow, once the `FIREBASE_SERVICE_ACCOUNT` repo secret is set.

## Run locally
```bash
npm install
npm run dev
```
