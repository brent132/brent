# Portfolio Section 1 Design

## Scope

Replace the default Next.js homepage with the first section of Brent's portfolio. This section establishes the portfolio's visual world but does not implement later About, Projects, Experience, or Contact sections.

The supplied image `C:\Users\brent\Music\Portflio\inspo\6073107873245368976.jpg` is the approved visual reference. The implementation will use `public/section1.jpg` as the clean hero background and `public/logo blue transparent.png` as the sole navbar brand mark.

## Product Goal

Within the first viewport, visitors should understand that Brent is a full-stack developer and web designer, see the promise of fast, modern, user-focused work, and recognize the future paths to work, contact, experience, and a resume.

This iteration is intentionally presentational. Navigation, calls to action, social controls, and the scroll cue will not navigate, download, submit, or scroll. They will have hover and keyboard-focus feedback only.

## Approved Direction

Use a faithful layered recreation of the reference rather than a split layout or a fixed desktop canvas.

- A full-viewport, deep navy hero uses `section1.jpg` as its background, anchored toward the workstation on the right.
- Directional navy/black overlays preserve the reference's dark atmosphere and guarantee text contrast on the left.
- A rounded, translucent dark navbar floats near the top with the blue BRENT wordmark, centered navigation, and an outlined resume control.
- The hero copy occupies the left half. The right half remains visually dominated by the workstation photograph.
- Electric blue is reserved for the role indicator, emphasized headline words, active navigation marker, primary action, and restrained hover states.
- The supporting action row, social row, and bottom-centered scroll cue reproduce the reference hierarchy.

## Content

Copy the reference content exactly except for the navbar identity: remove “Brent Ortega” and show only the supplied BRENT logo.

- Navigation: Home, About, Projects, Experience, Contact
- Role label: FULL-STACK DEVELOPER & WEB DESIGNER
- Headline: “I build digital solutions that are fast, modern, and user-focused.”
- Description: “I’m a Full-Stack Developer and Web Designer passionate about building clean, responsive, and impactful web applications. I enjoy turning ideas into functional solutions that solve real-world problems.”
- Actions: View My Work, Contact Me, Download Resume
- Social label: Let’s connect
- Social controls: GitHub, LinkedIn, email, location
- Scroll cue: SCROLL DOWN

## Component Architecture

`app/page.tsx` will compose one section component for this route. The section will contain focused semantic regions:

1. `SiteHeader`: brand mark, primary navigation, and resume control.
2. `HeroContent`: role label, headline, descriptive copy, and action controls.
3. `SocialLinks`: labeled icon controls.
4. `ScrollCue`: decorative mouse cue and label.

Small repeated controls will use the local shadcn/ui `Button` primitive, customized through Tailwind classes to match the reference rather than retaining generic default styling. Section-specific layout and composition remain scoped to section 1. Every interface icon will come from Lucide React rather than hand-drawn approximations.

## Layout and Responsive Behavior

The section uses `min-height: 100svh` and a centered content frame. At desktop widths, the header spans the frame, the copy remains on the left, and the background workstation occupies the right.

At tablet widths, type and spacing compress while preserving the two-sided composition. At mobile widths, the centered navigation is hidden, the brand and resume control remain visible, the hero copy scales down, action controls wrap or stack, and the social row remains reachable. The background stays anchored to the equipment and receives a stronger full-surface overlay so the text never competes with the image.

No horizontal scrolling is permitted at supported widths. Touch targets must remain at least 44 by 44 CSS pixels.

All implementation sizing, spacing, and responsive layout must use Tailwind's standard utility scale and named breakpoints. Do not use CSS `px` units or Tailwind arbitrary pixel classes such as `w-[100px]`; use the closest standard Tailwind utility or a relative, fluid Tailwind utility instead.

## Interaction and Accessibility

All visible controls are inert in this iteration. They will use semantic buttons with no event handlers, clear accessible names, visible focus rings, and hover/focus transitions limited to border, color, glow, and small translations. Motion will respect `prefers-reduced-motion`.

The main heading is the only `h1`. The header uses a `nav` landmark, the content remains readable without the background image, decorative visuals are hidden from assistive technology, and foreground contrast targets WCAG AA.

## Direction Contract

- **THESIS:** The first viewport presents the developer inside a real blue-lit building environment, not a generic centered portfolio card.
- **OWN-WORLD:** Near-black navy surfaces, electric blue light, Poppins typography, fine cool-gray borders, translucent dark chrome, and restrained rectangular controls.
- **STORY:** Visitors identify Brent's role, understand the value proposition, see the future routes through the portfolio, and know contact is available.
- **FIRST VIEWPORT:** Floating full-width navbar above left-weighted copy and controls, with the workstation dominating the right and the scroll cue centered at the bottom.
- **FORM:** Faithful layered reference recreation, selected first of three implementation approaches; seed key `user-pinned-section1-reference`.
- **FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

The direction contract must be present in the rendered root artifact and survive the production build.

## Verification

- Run the targeted section-structure regression check before and after implementation.
- Run ESLint and a production build.
- Verify the direction-contract seed in built output.
- Inspect the live page in the user's existing 1922×912 browser viewport and in a mobile viewport.
- Check hover and keyboard-focus states without adding functional behavior.
- Confirm no horizontal overflow, readable text contrast, valid landmarks, one `h1`, and usable touch targets.
- Run the Impeccable detector once, address mechanical findings, then complete the required finish review and document the resulting system in `DESIGN.md`.

## Explicit Non-Goals

- No later portfolio sections.
- No working navigation or scrolling.
- No resume download.
- No contact flow.
- No external social links.
- No fabricated projects, experience, credentials, or contact details.
