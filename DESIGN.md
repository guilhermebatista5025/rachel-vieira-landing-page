---
name: Serene Wisdom
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#4d463d'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#7f766c'
  outline-variant: '#d0c5b9'
  surface-tint: '#6e5b42'
  primary: '#45341e'
  on-primary: '#ffffff'
  primary-container: '#5d4b33'
  on-primary-container: '#d5bc9d'
  inverse-primary: '#dcc3a4'
  secondary: '#735a3a'
  on-secondary: '#ffffff'
  secondary-container: '#fddab2'
  on-secondary-container: '#785e3e'
  tertiary: '#423528'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a4c3d'
  on-tertiary-container: '#d1bdaa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f9debe'
  primary-fixed-dim: '#dcc3a4'
  on-primary-fixed: '#261906'
  on-primary-fixed-variant: '#55442c'
  secondary-fixed: '#ffddb6'
  secondary-fixed-dim: '#e2c19b'
  on-secondary-fixed: '#291801'
  on-secondary-fixed-variant: '#594325'
  tertiary-fixed: '#f4dfcb'
  tertiary-fixed-dim: '#d7c3b0'
  on-tertiary-fixed: '#241a0e'
  on-tertiary-fixed-variant: '#524436'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 120px
---

## Brand & Style

The design system is anchored in the principles of **Contemporary Minimalism** and **Refined Luxury**. It is specifically tailored for a psychoanalysis and emotional development practice, where the digital environment must serve as an extension of the therapeutic space: calm, authoritative, and deeply welcoming.

The visual narrative avoids the clinical coldness often found in healthcare, opting instead for a "Warm Boutique" aesthetic. It targets an audience seeking profound personal growth and professional stability. The emotional response should be one of immediate relief and trust—conveyed through generous whitespace, a high-end editorial feel, and a sophisticated earth-toned palette.

## Colors

The palette is derived from natural, organic tones that evoke stability and timelessness.

- **Primary (#5D4B33):** A deep, "Roasted Coffee" brown used for primary actions and deep-contrast text. It provides the grounding force of the brand.
- **Secondary (#A68966):** A muted "Antique Gold/Bronze." This is used for interactive accents, icons, and subtle dividers to inject a sense of luxury without being ostentatious.
- **Tertiary (#D9C5B2):** A soft "Linen" beige, used for secondary surfaces, containers, and background variations.
- **Neutral (#F9F7F2):** A "Cream Silk" base. This replaces pure white to reduce eye strain and provide a more "human" and tactile feeling to the interface.
- **Dark Accent (#3E3326):** Reserved for high-level headings and critical UI elements where maximum legibility is required.

## Typography

This design system uses a sophisticated pairing of a literary Serif and a functional Sans-Serif.

- **Headlines:** `Libre Caslon Text` is used to convey tradition, academic authority, and the "human story." Its classic proportions and elegant serifs provide the necessary gravitas for psychoanalytic themes.
- **Body & UI:** `Manrope` provides a modern, clean counterbalance. Its geometric but friendly structure ensures high legibility for long-form psychological content and functional interface labels.

**Usage Note:** Headings should utilize a slightly tighter letter spacing than default to maintain an editorial look. Body text should maintain generous line heights (1.5x - 1.6x) to ensure a relaxed reading experience.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain the feeling of an organized, curated experience. 

- **Grid Model:** 12-column grid with a 1200px max-width.
- **Vertical Rhythm:** A heavy emphasis on vertical "breathing room." Section padding is intentionally large (120px+) to separate different psychological concepts and prevent cognitive overload.
- **Mobile Adaptivity:** On mobile, the layout collapses to a single column with 24px side margins. Typography scales down significantly to ensure "above-the-fold" content remains impactful.
- **Alignment:** Central alignment is preferred for hero sections and quotes to evoke a sense of balance and focus.

## Elevation & Depth

To maintain a minimalist and high-end feel, this design system avoids heavy shadows and standard material depth.

1.  **Tonal Layering:** Depth is primarily achieved through subtle shifts in background color (e.g., a `Neutral` base with `Tertiary` containers).
2.  **Soft Ambient Shadows:** For interactive elements like "Floating Floating Action Buttons" or high-priority cards, use extremely diffused shadows: `0px 20px 40px rgba(93, 75, 51, 0.08)`. The shadow color is tinted with the primary brown to keep it organic.
3.  **Soft Outlines:** Secondary buttons and input fields use a low-opacity border (1px solid) in the `Secondary` or `Tertiary` color to maintain structure without adding visual noise.

## Shapes

The shape language is characterized by **Organic Softness**. 

- **Base Radius:** 0.5rem (8px) for standard UI components like inputs and small cards.
- **Large Radius:** 1.5rem (24px) for prominent feature images and containers.
- **Speciality Shapes:** Hero images should occasionally utilize "Arch" or "Organic Blob" masking (as seen in the reference) to break the rigidity of the grid and symbolize the fluid nature of the human psyche.

## Components

### Buttons
- **Primary:** Solid `Primary` background, `Neutral` text. Pill-shaped or slightly rounded. No icons unless necessary for navigation.
- **Secondary:** Transparent background with a 1px `Secondary` border. Text in `Primary` color.
- **Ghost:** No background or border. `Primary` text with a subtle underline on hover.

### Icons
- **Style:** Thin-line (1px or 1.5px stroke weight).
- **Color:** Always in `Secondary` (Bronze) or `Primary` (Brown). 
- **Visual Weight:** Icons should never compete with text; they serve as elegant visual cues or "punctuation."

### Input Fields
- Understated design: 1px border in `Tertiary`, font-size `body-md`. 
- Focus state: Border transitions to `Secondary` with a very soft outer glow.

### Cards & Containers
- Use the `Neutral` background with a subtle 1px `Tertiary` border or a very soft ambient shadow. Avoid harsh corners; use `rounded-xl` for containers that hold personal stories or testimonials.

### Testimonial Blocks
- Large `headline-sm` serif text, italicized, contained within a `Tertiary` background box with generous 40px padding.