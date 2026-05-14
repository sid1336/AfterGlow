# Agents

## Cursor Cloud specific instructions

### Overview

Afterglow is a front-end-only Next.js 14 (App Router) prototype — no backend, database, or external services. All data is hardcoded mock data in `data/mockProfiles.ts`.

### Commands

Standard npm scripts are documented in `README.md` and `package.json`:

- **Dev server:** `npm run dev` (port 3000)
- **Lint:** `npm run lint`
- **Build:** `npm run build`

### Notes

- Package manager is **npm** (lockfile: `package-lock.json`).
- No environment variables or `.env` files are needed.
- The dev server starts on port 3000 with no additional dependencies.
- Google Fonts (Inter, Fraunces) are fetched via `next/font/google` at dev/build time; first load requires network access.
