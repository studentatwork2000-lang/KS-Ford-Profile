---
name: Private Library
colors:
  surface: '#fef8f1'
  surface-dim: '#dfd9d2'
  surface-bright: '#fef8f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f3ec'
  surface-container: '#f3ede6'
  surface-container-high: '#ede7e0'
  surface-container-highest: '#e7e2db'
  on-surface: '#1d1b17'
  on-surface-variant: '#504442'
  inverse-surface: '#32302c'
  inverse-on-surface: '#f6f0e9'
  outline: '#827472'
  outline-variant: '#d3c3c0'
  surface-tint: '#745853'
  primary: '#271310'
  on-primary: '#ffffff'
  primary-container: '#3e2723'
  on-primary-container: '#ae8d87'
  inverse-primary: '#e3beb8'
  secondary: '#4c56af'
  on-secondary: '#ffffff'
  secondary-container: '#959efd'
  on-secondary-container: '#27308a'
  tertiary: '#231600'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d2a00'
  on-tertiary-container: '#b38f4a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#e3beb8'
  on-primary-fixed: '#2b1613'
  on-primary-fixed-variant: '#5b403c'
  secondary-fixed: '#e0e0ff'
  secondary-fixed-dim: '#bdc2ff'
  on-secondary-fixed: '#000767'
  on-secondary-fixed-variant: '#343d96'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fef8f1'
  on-background: '#1d1b17'
  surface-variant: '#e7e2db'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The brand identity for this design system is rooted in the "Literary Mystery" aesthetic—a blend of classic British academia and contemporary suspense. It targets a discerning reader who appreciates intellectual rigor and atmospheric storytelling. The visual language evokes the quiet, heavy air of a wood-paneled study at twilight: secure and professional, yet harboring secrets within the shadows.

The design style is **Minimalist / Modern Corporate** with **Tactile** accents. It prioritizes clarity and high-end editorial layouts while using subtle physical metaphors—like paper textures and ink-like color depths—to ground the digital experience in the world of physical publishing.

## Colors
The palette is built on a foundation of **Soft Cream (#FFF9F2)**, providing a warm, paper-like canvas that is easier on the eyes than pure white. 

- **Primary Library Brown (#3E2723)** is used for primary text and structural elements, providing the "ink" and "mahogany" feel.
- **Midnight Blue (#1A237E)** serves as a depth-builder, used for backgrounds in footer sections or primary call-to-action buttons to signal professional authority.
- **Muted Gold (#C5A059)** is reserved for ornamentation: icons, dividers, and premium labels. 
- **Restrained Red (#8B0000)** is used sparingly for high-impact emphasis, such as "New Release" badges or critical navigation alerts, channeling the suspense of the thriller genre without becoming garish.

## Typography
The typography strategy relies on the tension between the classic, high-contrast Serif and the precise, modern Sans-serif. 

**Libre Caslon Text** is the voice of the author. It is used for all headlines and display text to evoke the feeling of a printed manuscript. For large display sizes, use a slight negative letter spacing to create a more "locked-in" editorial feel.

**Manrope** provides a clean, functional counterpoint. Its geometric yet approachable forms ensure that long-form body text remains highly legible across all devices. For labels and navigation items, Manrope should be used in uppercase with generous letter spacing to maintain a premium, organized appearance.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain the feel of a curated book layout, centered with generous outer margins. 

- **Desktop (1440px+):** 12-column grid with 64px margins. Section spacing is intentionally large (120px) to allow the content "room to breathe," mimicking the whitespace of a luxury art book.
- **Tablet (768px - 1024px):** 8-column grid with 40px margins.
- **Mobile (<768px):** 4-column grid with 20px margins.

Spacing is strictly mathematical, built on an 8px base unit. Vertical rhythm is critical; always ensure that paragraph spacing and heading margins are consistent to maintain the "typeset" quality of the pages.

## Elevation & Depth
This design system avoids heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**. 

Depth is primarily achieved through color blocking—using the Midnight Blue or Library Brown for full-width sections to "sink" content, or using very thin (1px) borders in Muted Gold to define cards. 

When shadows are necessary (specifically for book covers to make them appear 3D), use a **Double Shadow** technique:
1. A sharp, 2px 15% opacity shadow to define the edge.
2. A very soft, 20px 5% opacity "ambient" shadow to lift the object off the cream background.

## Shapes
The shape language is **Soft (Level 1)**. 

While the brand is traditional, purely sharp corners (0px) feel too aggressive for a "warm" library. A subtle 0.25rem (4px) radius on buttons and input fields softens the UI, making it feel more approachable while remaining professional. 

**Book Cards** should maintain sharper corners or a very minimal 2px radius to mimic the cut of a physical book cover. Circular elements are reserved exclusively for author headshots or small icon backgrounds to provide a soft visual break from the otherwise rectangular grid.

## Components

### Navigation
The navigation is slim and "sticky." Use a semi-transparent Soft Cream background with a Backdrop Blur (10px) and a single 1px Library Brown bottom border. Links use `label-lg` typography.

### Buttons
- **Primary:** Midnight Blue background, Cream text, 4px roundedness. Hover state: slight shift to Library Brown.
- **Secondary:** Transparent background, 1px Library Brown border.
- **Tertiary:** Text-only with a Muted Gold 1px underline that expands on hover.

### Book Cards
Book cards are the centerpiece. The image (cover art) should have a very subtle inner glow to simulate the edge of a book. Below the image, use `headline-sm` for the title and `label-sm` for the series information. On hover, the card should lift 4px with a soft ambient shadow.

### Input Fields
Used for the newsletter signup. Background should be a slightly darker cream (#F5EFE6) with a 1px Library Brown bottom-border only (minimalist style). Label sits above the field in `label-sm`.

### Section Dividers
Instead of plain lines, use a thin horizontal rule in Muted Gold. For major transitions, a small decorative diamond or fleur-de-lis icon in the center of the line adds to the "private library" aesthetic.