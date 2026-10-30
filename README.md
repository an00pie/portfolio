# Anoop Danimon — Personal Portfolio

An interactive portfolio built with React 18, TypeScript, Vite, Framer Motion, React Router, and Tailwind CSS. The redesign follows the Jony website shown in the supplied `design/` video, with Anoop's existing projects and biography.

## Run

```bash
npm install
npm run dev
```

```bash
npm run build   # TypeScript checks + production build
npm run preview
```

## Pages and interactions

- `/`: full-screen perspective project collection. Drag horizontally, move the pointer, or scroll to explore. Select a plane to open its project or destination. The pause control stops automatic motion.
- `/work`: featured case studies and the complete archive, with explicit AI/data, web/systems, and creative filters.
- `/work/:slug`: full case studies with role, collaborators, recognition, features, stack, and project links.
- `/personal-gallery` (also `/gallery`): collection with masonry/grid switching and a native image dialog. Use arrow keys to browse and Escape to close.
- `/about`: profile, education, leadership roles, approach, service accordions, and recognition.
- `/contact`: social links, copyable email address, and contact form.

The top icon navigation expands on hover or click. On the homepage, reveal it with the top-center menu button. Page changes use a black curtain transition. Reduced-motion preferences disable automatic gallery movement and decorative transitions.

## Edit content

- `src/data/content.ts`: biography, contact details, featured projects, archive, services, recognition, and résumé link.
- `src/data/gallery.ts`: collection items, captions, and image destinations.
- `src/components/Hero.tsx`: floating entry collection and its destinations.
- `src/index.css`: design tokens, self-hosted fonts, page layouts, motion, and responsive behavior.

The project interfaces are illustrative concepts; the collection labels them accordingly. The current portrait is Anoop's illustrated GitHub avatar. Replace `public/images/anoop-profile.jpg` and the résumé at `public/resume.pdf` with official assets when available. Sources and font licenses are documented in `ASSETS.md`.

## Contact form

To receive messages through Formspree, copy `.env.example` to `.env` and set:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ACTUAL_FORM_ID
```

Without an endpoint, the button says **Compose email** and opens an email-app draft containing the completed fields. It never reports an unsent message as delivered. The address can also be copied or opened directly.

## Deployment

Vercel: framework preset **Vite**, build command `npm run build`, output `dist`. The included `vercel.json` rewrites client-side routes to `index.html`. Configure the optional Formspree environment variable before building.

## Design documentation

`PRODUCT.md` records product truth. `DESIGN.md` records the finished visual system. `.impeccable/surface-briefs/portfolio.md` contains the reference and route-level direction contract.
