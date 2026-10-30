---
name: Anoop Danimon Portfolio
description: Floating project objects and quiet editorial reading on an almost-white canvas.
colors:
  paper: "#f7f7f5"
  ink: "#10110f"
  muted: "#64665f"
  line: "#dedfd9"
  red: "#a72e18"
  dock: "#0d0e0c"
  room: "#f5f5f3"
  reading: "#55594e"
  dock-icon: "#a7aaa0"
  field-line: "#56594e"
  field-placeholder: "#a2a69a"
  field-focus: "#c2c8b5"
  send-hover: "#dce0d2"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(54px, 6vw, 84px)"
    fontWeight: 200
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "39px"
    fontWeight: 200
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  lead:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "25px"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "Fragment Mono, monospace"
    fontSize: "9px"
    fontWeight: 400
  caption:
    fontFamily: "Fragment Mono, monospace"
    fontSize: "8px"
    fontWeight: 400
  signature:
    fontFamily: "Anoop Signature, cursive"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: 1
rounded:
  square: "0px"
  circle: "50%"
spacing:
  tight: "8px"
  control: "12px"
  content: "20px"
  gutter: "24px"
  project-gap: "32px"
components:
  send-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "13px 16px"
  send-button-hover:
    backgroundColor: "{colors.send-hover}"
  dock-contact-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "14px"
  dock-contact-button-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
  text-link:
    textColor: "{colors.ink}"
  contact-field:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "10px 0"
  navigation-dock:
    backgroundColor: "{colors.dock}"
    textColor: "{colors.paper}"
    height: "54px"
  work-filter:
    backgroundColor: "transparent"
    typography: "{typography.label}"
    padding: "3px 0"
  work-image:
    rounded: "{rounded.square}"
  service-row:
    backgroundColor: "transparent"
    padding: "19px 0"
---

# Design System: Anoop Danimon Portfolio

## Overview

**Creative North Star: "The Floating Collection"**

Projects read as objects in an explorable room, with the interface receding around them. Almost-white paper, light serif typography, compact monospaced controls, square imagery, and a handwritten Anoop signature carry the reference-matched world into quieter reading pages.

The system pairs spatial play with editorial restraint: depth belongs to the floating image field; project descriptions, biography, and case studies use centered reading columns and thin rules. Black navigation, image inspection, and contact surfaces provide concentrated contrast. The confirmed video reference and finished implementation supply the direction; this is a code-led record, not a concept proposal.

**Key Characteristics:**
- Almost-white paper and near-black ink with restrained red interaction accents.
- Light Spectral headings, utilitarian Arial prose, and compact Fragment Mono controls.
- Square image planes, narrow reading columns, and fine dividers.
- Inertial perspective exploration, expanding black navigation, and curtain page changes.
- Anoop's signature and verified asset provenance instead of borrowed identity.

Source authority: `src/index.css`, `src/App.tsx`, and the shipped route components. `PRODUCT.md` and the October 30 extension in `.impeccable/surface-briefs/portfolio.md` establish the confirmed direction. The nine desktop/mobile captures in `.impeccable/review/added-projects/` and its passing `checks.json` record the latest finished extension: home at both sizes, desktop work, and DELTA, ChargeAhead, and INSIGHT.arc case studies at both sizes. The supplied independent finish review inspected all nine and returned ship, with no material fixes. Build/browser, native-click, filter, and mobile checks passed; the detector returned `[]`, and the provenance scan found five project rasters with zero missing provenance records. The ten earlier `.impeccable/review/poster-update/` captures and passing checks remain evidence for the unchanged poster gallery and preview interactions. `ASSETS.md` and `public/images/projects/*.webp.json` record screenshot provenance and presentation limits; the new screenshots are content, not new visual tokens. The older `design-tokens.md` and `tailwind.config.js` palette are historical, not active visual authority.

## Colors

The palette is nearly neutral, leaving project artwork to supply most chromatic variety. Frontmatter values are normative; names below refer to those tokens.

### Primary
- **Red:** restrained brick-red emphasis for link hover, general keyboard focus, input carets, and the dock contact action's hover.

### Neutral
- **Paper:** page canvas, inverted action fills, and text on black surfaces.
- **Ink:** primary text, social buttons, and dark interaction fills.
- **Dock:** concentrated black for navigation, the contact form, page curtain, and image inspection backdrop.
- **Room:** subtly distinct floating-room canvas.
- **Muted / Reading:** secondary metadata and long-form paragraph text, respectively.
- **Line:** thin separators for lists, metadata, services, and the footer.
- **Dock Icon:** subdued icons before hover or current state.
- **Field Line / Field Placeholder / Field Focus:** dark-form input boundaries, prompts, and visible focus treatment.
- **Send Hover:** softened pale fill for the form submit action's hover.
- **White:** text and icons over imagery and within dark form fields.

### Named Rules
**The Quiet Accent Rule.** Red marks interaction and emphasis; the paper canvas and project artwork retain visual priority.

## Typography

**Display Font:** Spectral, with Georgia and serif fallbacks; self-hosted weights (200 and 400).

**Body Font:** Arial, with sans-serif fallback. This is the observed prose face, not a display face.

**Label/Mono Font:** Fragment Mono, with monospace fallback; self-hosted weight (400).

**Signature Font:** Mrs Saint Delafield, self-hosted under the CSS family name `Anoop Signature`; used for Anoop's wordmark rather than general text.

**Character:** delicate editorial headings contrast with practical prose and tiny, precise interface metadata. No synthetic font weights are enabled.

### Hierarchy
- **Display:** the frontmatter's fluid display role for general page titles; mobile titles become (57px), with the contact title at (53px). The poster collection uses a local display-size override (`clamp(60px, 7vw, 96px)`, mobile 60px), not a replacement site-wide scale.
- **Headline:** shared archive, biography-section, and case-section role; mobile sections become (34px).
- **Personal title:** the biography title uses (48px), or (45px) on mobile.
- **Lead:** Spectral regular for the biography introduction; case summaries use (27px) with the same (1.4) line-height, becoming (25px) on mobile.
- **Body:** long-form paragraphs follow the body role; mobile biography/case text becomes (13px). Supporting archive/form prose generally uses (12–13px).
- **Label / Caption:** compact mono roles for navigation, filters, project names, years, and file captions. Poster titles use (10px), with secondary series at (9px); mobile uses (9px / 8px) and a (1.5) caption line-height. Uppercase belongs to navigation and metadata; form labels retain sentence case. Other small secondary captions can reach (7px) on mobile; treat that as existing metadata density, not a new body-text standard.
- **Signature:** the base signature role varies by placement: room center (39px desktop, 32px mobile), curtain (42px), and profile artwork overlay (70px).

### Named Rules
**The Three Voices Rule.** Use Spectral for editorial hierarchy, Arial for prose, and Fragment Mono for controls and metadata; reserve handwriting for the Anoop signature.

## Layout

The page shell fills at least the small viewport height. Editorial pages have generous upper clearance beneath the fixed dock: desktop padding (112px 24px 100px), mobile (102px 20px 65px). General page headings are centered; the poster collection instead pairs a left-aligned title with a right-hand introduction. Reading content stays narrow rather than stretching to the gallery width.

- Work and contact columns cap at (540px); the work column becomes (580px) from (1600px) upward.
- Biography prose caps at (480px), case prose at (560px), and case cover/back-link regions at (850px).
- The gallery caps at (1160px), growing to (1260px) at the wide breakpoint. Its default poster wall is a three-column staggered grid with gaps (44px vertical / 30px horizontal) and the middle column lowered (45px). Up to (900px), it becomes two columns with even items lowered (35px); up to (600px), it retains two columns and uses gaps (30px / 16px).
- The alternate compact index uses four columns, three up to (900px), and two up to (600px), with gaps (30px / 20px). Its portrait frames use aspect ratio (0.707) and contained images rather than square crops. The default wall follows each poster's natural proportions. The collection header stacks on mobile; its introduction caps at (270px desktop, 290px mobile).
- Featured work is a single stack with (32px) gaps, reduced to (28px) on mobile. Covers use a (1.6) aspect ratio, with captions beneath rather than inside a padded card.
- The room occupies (100svh), with minimum height (580px desktop, 600px mobile), a (1100px) perspective, and centered five-part navigation. Plane sizing uses CSS clamps; room geometry also changes below (700px) in the animation code.
- Desktop work filters form a quiet vertical list; mobile filters wrap horizontally. The footer wraps its location/time row onto a separate full-width line on mobile.
- Recurring small gaps are captured in frontmatter; larger section separations vary by context (65–100px). These are observed values, not a fabricated universal spacing progression.

## Elevation & Depth

Editorial surfaces are flat and separated by whitespace and fine rules. The floating room explicitly uses perspective, image shadows, and a soft inset vignette. These shadows are native to the reference's spatial world and are not a generic card treatment. Black panels establish contrast without additional floating-panel shadows.

### Shadow Vocabulary
- **Floating plane:** `8px 15px 22px rgb(0 0 0 / 10%)` beneath room imagery.
- **Floating plane hover/focus:** `10px 24px 32px rgb(0 0 0 / 18%)`, paired with image darkening.
- **Room vignette:** `inset 0 0 140px 10px rgb(16 17 15 / 15%)`; mobile uses `inset 0 0 75px rgb(16 17 15 / 12%)`.

### Named Rules
**The Spatial Exception Rule.** Keep reading surfaces flat; use perspective and soft shadows for the floating room's image objects.

## Shapes

Images, action buttons, the dock, and form fields have square edges. A single-pixel line organizes lists and form baselines. Circular geometry is reserved for the small navigation avatar and availability indicator, not applied to ordinary cards or controls. Icons are thin-stroked SVGs; arrows communicate links, expansion controls communicate state.

## Components

### Buttons and text links
Actions are compact and direct. The form action is paper on black, square, and mono, with its normative padding in frontmatter; hover softens the fill. The dock contact action fills its panel width, inverts to red/white on hover, and uses a short color transition (0.2s). Underlined text links use a (5px) underline offset and turn red on hover. Social actions are square icon blocks (30px).

General keyboard focus is a red (2px) outline offset by (5px). Disabled buttons use wait cursors and opacity (0.65). Preserve visible focus rather than replacing it with hover-only changes.

### Inputs / Fields
Fields sit inside a black contact panel capped at (430px), with padding (35px desktop, 26px mobile). Labels are mono; input values are Arial (13px desktop, 16px mobile). Transparent fields use a bottom rule and square corners. Focus lightens the baseline and adds the field-focus outline (1px, 5px offset). The textarea remains vertically resizable. Loading, success, error, and email-draft feedback retain the existing form's live status region and alternate email action; there is no separate decorative validation color system.

### Navigation
The fixed black dock has a compact resting height from frontmatter, centered (30px) icon targets, and thin (15px) SVG icons. Hover/current icons invert to paper/ink. Work and about panels expand to (216px); contact expands to (240px), with local time and a contact action. Mouse hover and click both open contextual panels; Escape, outside pointer actions, and focus departure close them. On the room, a small top-center reveal button exposes the dock. The separate five-part center navigation and signature have transparent backgrounds: no painted text plates. Its links turn red and reveal arrows on hover/focus; only link targets intercept pointer events, leaving the surrounding room available for exploration.

### Filters and collection controls
Work categories are text buttons, not filled chips. The active category is ink with an underline offset (4px); hover is red. Poster wall/compact grid buttons use icon contrast and `aria-pressed` rather than a pill container, alongside the eight-poster count and full-view prompt above a ruled toolbar. Preserve pressed-state semantics.

### Project image and caption
Square-edged imagery leads; there is no surrounding elevated card. Hover/focus scales work images to (1.04), reduces opacity to (0.8), and reveals an action label. The image transform takes (0.8s) with the shared ease-out curve; label reveal takes (0.25s). Captions pair project/category on the left with the year on the right. Archive entries use thin top rules and text descriptions.

### Floating collection
Eight linked planes occupy continuous upper and lower paths at different depths and rotations: five live-site screenshots (Zoltraak, Bus Sahayi, DELTA, ChargeAhead, and INSIGHT.arc) link to their case studies, and three supplied posters link to hash-addressed full-size collection previews. ChargeAhead retains `/work/zephyrus`; all eight original posters remain in the collection. Landscape and portrait planes coexist; the room is not a generic SVG study collection. Screenshots preserve each project's own appearance without adding its palette or typography to the portfolio system; presentation limits remain in `ASSETS.md` and product context in `PRODUCT.md`.

Pointer movement, drag, wheel exploration, and gentle auto-rotation shape the room without snapping. Easing is frame-rate-independent: angular response uses time constants (35ms dragging / 150ms otherwise), with pointer smoothing (220ms). Manual drag takes priority; capture begins only after movement exceeds (7px), and the following pointer click is suppressed after a drag. A click without dragging follows the native link. Hover/focus pauses auto-rotation; a pause/play button also controls it, and automatic movement resumes only after an interaction quiet period (1200ms). Hover/focus darkens the image and reveals a mono caption over a translucent black strip. Do not substitute a screenshot grid for this signature interaction when extending the room.

### Poster artwork
All eight supplied originals appear in the collection, resized without source cropping; the wall and contained compact index preserve complete artwork at rest. Captions sit below each image, with the series on a secondary line. Hover subtly scales the image (1.035) and dims it (brightness 0.85); hover/focus reveals a small full-view arrow. Thumbnails are native buttons with descriptive names. These posters are supplied artwork, not invented personal photography or evidence of a client relationship.

### Image inspection
The native full-viewport dialog uses a nearly opaque dock-black backdrop, contained full-size poster artwork, light serif title, supporting caption, and previous/next controls. Poster hash links open the corresponding preview directly. Escape closes it; arrow keys move through images; focus returns to the originating thumbnail. The layout stacks captions and controls on mobile. The component snippets in the sidecar illustrate visual states; route and modal behavior remain owned by React.

### Service disclosure
Fine horizontal rules bound each row. A full-width transparent text button pairs the service title with a plus/minus SVG. One description opens at a time through a height/opacity animation (0.3s), with `aria-expanded` and `aria-controls` reflecting state.

### Page motion
The black signature curtain retracts from the top over (0.85s), after a (0.12s) delay, using `cubic-bezier(0.76, 0, 0.24, 1)`. Page content settles from a small vertical offset over (0.7s). Most other transforms use `cubic-bezier(0.22, 1, 0.36, 1)`. Respect reduced motion: the curtain is omitted, automatic room rotation and pointer parallax stop, smooth scrolling is disabled, and CSS animation/transition durations collapse. Manual exploration remains available.

## Do's and Don'ts

### Do:
- Do preserve paper-and-ink editorial surfaces and use red for interaction emphasis.
- Do pair serif hierarchy with Arial prose and Fragment Mono controls.
- Do retain square imagery, narrow reading columns, and fine ruled lists.
- Do preserve keyboard focus, pressed/expanded state, pause controls, and reduced-motion behavior.
- Do describe interface concepts and visual studies honestly, following ASSETS.md for provenance.

### Don't:
- Don't restore the previous neon palette or dark-theme utility overrides as the active site theme.
- Don't spread floating-room shadows onto editorial cards and reading panels.
- Don't use the signature face as a general heading or body font.
- Don't present illustrative project concepts as verified production screenshots or the illustrated avatar as personal photography.

Not canonized or repaired: the historical palette in `design-tokens.md` and `tailwind.config.js` is documented as legacy drift, not inherited. Small metadata typography remains recorded as shipped, not promoted to a general text-size rule. No material finish defects were reported by the supplied ship review; this documentation pass does not change implementation.
