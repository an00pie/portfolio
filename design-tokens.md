# Design Token Specification

*Based on analysis of https://ethanclark.framer.ai/ adapted for Anoop Danimon's Portfolio.*

## 1. Color Palette

| Token | Light Theme | Dark Theme (Default) | Role |
| :--- | :--- | :--- | :--- |
| `--bg-base` | `#FBFBFB` (Off-white) | `#0B0C0E` (Deep obsidian) | Main page background |
| `--bg-surface` | `#FFFFFF` | `#121316` | Card and component surfaces |
| `--bg-surface-elevated` | `#F3F4F6` | `#181A1F` | Hover states, modals, pills |
| `--border-subtle` | `rgba(0, 0, 0, 0.08)` | `rgba(255, 255, 255, 0.08)` | Dividers, card borders, pills |
| `--border-hover` | `rgba(0, 0, 0, 0.2)` | `rgba(255, 255, 255, 0.2)` | Interactive border highlight |
| `--text-primary` | `#0A0A0A` | `#F3F4F6` | Display headers, primary text |
| `--text-secondary` | `#525252` | `#9CA3AF` | Subheaders, paragraphs, metadata |
| `--text-muted` | `#737373` | `#6B7280` | Timestamps, micro-labels, captions |
| `--accent-green` | `#7ED957` | `#7ED957` | Primary brand accent (from LinkedIn banner) |
| `--accent-green-glow` | `rgba(126, 217, 87, 0.25)` | `rgba(126, 217, 87, 0.25)` | Focus rings, status dot glow, subtle gradients |
| `--status-online` | `#7ED957` | `#7ED957` | "Available for Work" pulsing indicator |

## 2. Typography

- **Primary Font Family**: `'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif`
- **Display Headings**:
  - `Hero Wordmark ("ANOOP")`: `clamp(4.5rem, 16vw, 15rem)`, `font-black (900)`, `tracking-[-0.06em]`, `leading-[0.85]`, uppercase
  - `Section Titles (H2)`: `clamp(2rem, 5vw, 3.75rem)`, `font-bold (700)`, `tracking-[-0.04em]`, `leading-[1.1]`
  - `Card / Case Study Titles (H3)`: `clamp(1.25rem, 2.5vw, 2rem)`, `font-semibold (600)`, `tracking-[-0.02em]`
- **Eyebrows / Overlines**: `0.75rem (12px)`, `font-semibold (600)`, `tracking-[0.2em]`, uppercase, mono or display sans
- **Body Text**:
  - `Intro / Lead`: `clamp(1.125rem, 2vw, 1.375rem)`, `leading-[1.6]`, `font-normal (400)`
  - `Standard Paragraph`: `1rem (16px)`, `leading-[1.7]`, `font-normal (400)`
  - `Microcopy / Captions`: `0.875rem (14px)`, `leading-[1.5]`

## 3. Spacing & Grid System

- **Max Container Width**: `1280px` (`max-w-7xl`) with responsive padding:
  - Mobile: `1.25rem (20px)`
  - Tablet: `2.5rem (40px)`
  - Desktop: `4rem (64px)`
- **Section Spacing (`padding-y`)**:
  - Desktop: `7rem to 9rem (112px - 144px)`
  - Mobile: `4rem to 5rem (64px - 80px)`
- **Component Gap**:
  - Work Card Grid: `2rem (32px)` desktop, `1.25rem (20px)` mobile
  - Services Accordion / Rows: `1.5rem (24px)`

## 4. Motion, Transitions & Easing

- **Framer Motion Easing**:
  - Smooth Editorial Ease: `[0.22, 1, 0.36, 1]` (custom cubic-bezier matching Framer's default spring/ease-out)
  - Quick Hover Transition: `duration: 0.25s, ease: "easeOut"`
  - Stagger Children: `0.08s` delay per child
  - Route Fade/Slide: `initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }`
- **Interactive States**:
  - Project Card: Image scale `1.03` with smooth overflow clip + Arrow button rotates `45deg`
  - Button Hover: Scale `1.02` with subtle brightness increase or green border shimmer
  - Status Dot: Ping animation with `2s` recurring loop
  - Continuous Marquee: CSS keyframe `linear infinite 30s` scroll with pause on hover

## 5. Shadows & Glassmorphism

- **Top Navigation Pill**: `backdrop-blur-xl bg-black/60 dark:bg-black/60 light:bg-white/80 border border-white/10`
- **Surface Elevation**: `0 20px 40px -15px rgba(0, 0, 0, 0.3)`
- **Input Glow on Focus**: `0 0 0 2px rgba(126, 217, 87, 0.35)`
