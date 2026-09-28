# Anoop Danimon — Personal Portfolio

A minimal, high-performance personal portfolio website built with **React, Vite, TypeScript, Tailwind CSS, and Framer Motion**, replicating the editorial aesthetic, layout, and pacing of [Ethan Clark's design](https://ethanclark.framer.ai/).

---

## ⚡ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (with custom design token extensions)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (with prefers-reduced-motion accessibility)
- **Routing**: [React Router v6](https://reactrouter.com/) (`/`, `/work`, `/work/:slug`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter (Google Fonts)

---

## 🚀 Quick Start

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/an00pie/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 2. Development

```bash
# Start local development server on port 5173
npm run dev
```

### 3. Production Build & Preview

```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📝 How to Edit Copy & Content

All website copy, case studies, roles, bio information, and contact details live in a single typed configuration file:

👉 **[`src/data/content.ts`](file:///home/an00pie/Documents/new_portfolio/src/data/content.ts)**

You do **not** need to touch any React components or styles to update your content!

### Sections in `src/data/content.ts`:

- `content.hero`: Name, intro line, role badge, location, status text.
- `content.featuredProjects`: The 4 primary case studies shown on the homepage and `/work/:slug`.
- `content.allProjects`: Additional engineering and design projects shown on `/work`.
- `content.about`: Narrative biography paragraphs, education details, and leadership roles.
- `content.services`: The 4 service cards with descriptions and tech tag pills.
- `content.recognition`: Ticker items in the continuous honors/award marquee.
- `content.contact`: Form heading, invitation note, email, location, and social links.

---

## 📬 Contact Form Configuration (Formspree)

The contact form is pre-configured to connect to [Formspree](https://formspree.io):

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Create a new form on [Formspree](https://formspree.io) and copy your Form ID.
3. Update `.env`:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
4. If no Formspree ID is set (e.g. during local development), the form provides a smooth simulated success state and direct `mailto:` fallback.

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub (`https://github.com/an00pie/your-repo`).
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. In **Environment Variables**, add:
   - `VITE_FORMSPREE_ENDPOINT`: Your Formspree form URL
5. Click **Deploy**.

For clean client-side routing on Vercel without 404s on direct subroutes, a `vercel.json` is included:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 🎨 Design Tokens & Customization

The project uses design tokens defined in [`design-tokens.md`](./design-tokens.md) and [`tailwind.config.js`](./tailwind.config.js):

- **Primary Accent**: `#7ED957` (Fresh Green from Anoop's LinkedIn banner)
- **Base Background**: `#0B0C0E` (Deep obsidian dark theme)
- **Light Theme**: `#FBFBFB` (Clean off-white)
- **Display Type**: Ultra-bold condensed Inter display headers

---

## 📌 Placeholders & Items to Personalize

1. **Portrait Image**: Replace [`public/images/portrait.svg`](./public/images/portrait.svg) with your personal photo (e.g., `portrait.jpg`).
2. **Résumé PDF**: Replace [`public/resume.pdf`](./public/resume.pdf) with your actual curriculum vitae PDF.
3. **Zephyrus 8.0 Details**: Fill in the specific problem and solution details in `featuredProjects[3]` inside `src/data/content.ts`.
4. **Formspree Form ID**: Add your Formspree endpoint in `.env`.
