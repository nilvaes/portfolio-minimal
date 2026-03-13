## Ömer – Junior Fullstack Web Developer

A minimal, modern portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, **Framer Motion**, and **lucide-react**.

### Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Customize your portfolio

- **Hero & about copy**: edit `src/app/page.tsx` (hero and about sections).
- **Tech stack**: update the `techStack` object in `src/app/page.tsx`.
- **Projects**: edit the `projects` array in `src/app/page.tsx`:
  - Replace titles, descriptions, tech tags.
  - Update `github` and `demo` URLs.
- **Experience**: adjust the `experience` array in `src/app/page.tsx`.
- **Contact**: replace the `mailto`, GitHub, and LinkedIn URLs in the contact section.

Deploy as you prefer (e.g. Vercel or GitHub Pages for a static export).

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
