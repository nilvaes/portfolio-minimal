## Ömer – Full Stack Web Developer Portfolio

This repository contains my personal developer portfolio: a modern, animated single-page site that presents my background as an **IT Specialist for Application Development (Apprentice)** and **junior full stack web developer**.

The focus is on clean UX, subtle motion, and clearly structured information for recruiters and hiring managers.

### Tech stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: lucide-react

---

## Running the project locally

1. **Install dependencies**

```bash
npm install
```

2. **Start the dev server**

```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

---

## Structure & customization

The app is intentionally small and focused. Most of the portfolio content lives in `src/app/page.tsx`.

- **Hero section**
  - Tagline, short introduction and main call‑to‑action.
  - Uses `GlowButton` for the glowing “View my projects” button.

- **About**
  - High‑level summary of my apprenticeship and what I focus on.
  - Edit the text in the `About` section of `src/app/page.tsx`.

- **Tech stack**
  - Controlled by the `techStack` object near the top of `src/app/page.tsx`.
  - Update `primary` (core skills) and `secondary` (tools I’m comfortable with) as my skills grow.

- **Projects**
  - Defined in the `projects` array in `src/app/page.tsx`.
  - For each project: update `title`, `description`, `tech`, `github`, and `demo`.
  - For now, this section contains placeholder projects that I will replace with real ones.

- **Experience**
  - Timeline of my apprenticeship at IQ‑ME GmbH and vocational school.
  - Data comes from the `experience` array in `src/app/page.tsx`.

- **Contact**
  - Includes buttons for email, GitHub and LinkedIn.
  - The “Email me” button copies `omer.savas@gmx.de` to the clipboard instead of opening a mail client.

---

## Deployment

This is a standard Next.js application and can be deployed to any platform that supports Next.js:

- **GitHub Pages** – Static export is configured. Push to `main`; the GitHub Action builds and deploys to GitHub Pages. Enable **Settings → Pages → Source: GitHub Actions**. The site will be at `https://<username>.github.io/portfolio-minimal/`.
- Vercel (recommended for full Next.js features)
- Netlify
- Render
- Custom Node.js hosting

For production builds:

```bash
npm run build
npm start
```

For static export (e.g. GitHub Pages), the build outputs to the `out` folder.

---

## Future work

- Add real, production‑style projects to the **Projects** section as I build them.
- Potentially extract sections into reusable `sections/*` components.
- Iterate on animations and visuals while keeping accessibility and performance in mind.

