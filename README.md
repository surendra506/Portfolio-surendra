# Surendra Pratap Ahirwar Portfolio

An ultra-premium, cinematic personal portfolio for **Surendra Pratap Ahirwar**, built as a high-end product experience with React, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, Lenis smooth scrolling, and a lazy-loaded Three.js hero.

## Features

- Full-screen cinematic hero with interactive Three.js object, shader-style aura, particle field, split text reveal, typing-style tagline, and magnetic CTA buttons
- Fully integrated dark/light theme system with an animated navbar toggle, saved preference, futuristic neon dark mode, and elegant pastel light mode
- Lenis smooth scrolling with GSAP ScrollTrigger reveals, parallax layers, pinned horizontal project storytelling, and animated journey timeline
- Premium dark visual system with neon blue/cyan/violet gradients, glassmorphism, glow edges, custom cursor, scroll progress, floating particles, and ripple feedback
- Responsive sections for About, Skills, Projects, Experience/Journey, Contact, Footer, and navigation
- Performance-aware structure with lazy-loaded Three.js, Vite manual chunks, reusable components, and mobile-friendly animation behavior

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal.

## Production Build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Keep the default build settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

## Deploy to GitHub Pages

Because Vite needs the repository base path on GitHub Pages, build with the repo name as the base path:

```bash
VITE_BASE_PATH=/Portfolio-surendra/ npm run build
```

Then publish the contents of `dist/` using GitHub Pages.

If you deploy from GitHub Actions, set the same `VITE_BASE_PATH` environment variable in the workflow before running the build.
