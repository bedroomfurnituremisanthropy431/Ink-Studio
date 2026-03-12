## Ink Studio

Ink Studio is a single-page, luxury tattoo studio landing site built with **React**, **TypeScript**, and **Vite**, styled using **Tailwind CSS** with custom animations powered by **GSAP**. It showcases hero visuals, portfolio highlights, artist profiles, studio philosophy, and a contact form for booking consultations.

### Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build tool**: Vite
- **Styling**: Tailwind CSS + custom CSS (`index.css`)
- **Animation**: GSAP (`gsap`, `gsap/ScrollTrigger`)

### Features

- **Hero section** with layered imagery, parallax-like motion, and floating card animation.
- **Portfolio highlights** grid with 3D-like card motion and scroll-triggered reveals.
- **Visionaries section** presenting featured artists with portraits and titles.
- **Philosophy section** combining imagery and copy to communicate the studio’s ethos.
- **Contact form** for starting a booking or consultation flow (UI only; no backend wiring yet).
- **Responsive design** targeted at modern desktop and mobile browsers.

### Getting Started

#### Prerequisites

- Node.js (recommended LTS)
- npm (comes with Node)

#### Install dependencies

```bash
npm install
```

#### Run the development server

```bash
npm run dev
```

By default Vite will print the local development URL (usually `http://localhost:5173`). Open it in your browser to view Ink Studio.

#### Build for production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

#### Preview the production build

```bash
npm run preview
```

This serves the built assets locally so you can verify the production bundle.

### Project Structure

- `index.html` – HTML entry file with root mount node and basic meta tags.
- `src/main.tsx` – Vite/React entry point that renders the `App` component.
- `src/App.tsx` – Top-level layout composing all page sections.
- `src/components/Header.tsx` – Sticky header with navigation and primary CTA.
- `src/components/Hero.tsx` – Hero section with background imagery and animated floating card.
- `src/components/PortfolioHighlights.tsx` – Scroll-triggered portfolio grid with 3D motion.
- `src/components/Visionaries.tsx` – Featured artists grid.
- `src/components/Philosophy.tsx` – Studio philosophy section with image and copy.
- `src/components/ContactForm.tsx` – Contact form UI for requesting consultations.
- `src/components/Footer.tsx` – Footer with navigation and social links.
- `src/index.css` – Global styles, fonts, and utility classes layered on top of Tailwind.
- `tailwind.config.js` / `postcss.config.js` – Tailwind & PostCSS configuration.
- `vite.config.ts` – Vite configuration.
- `tsconfig*.json` – TypeScript configuration files.

### Available npm Scripts

- `npm run dev` – Start the Vite development server.
- `npm run build` – Build the app for production.
- `npm run preview` – Preview the production build locally.
- `npm run lint` – Run ESLint over the project.
- `npm run typecheck` – Run TypeScript type checking (no emit).

### Environment / Backend Notes

The project currently uses static content and front-end animations only; the contact form does not submit data to a backend.