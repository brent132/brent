# Portfolio Section 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the default Next.js homepage with a faithful, responsive recreation of the approved section-1 portfolio hero.

**Architecture:** Keep `app/page.tsx` as a thin route and place the full section in a focused server component. Use `next/image` for the two supplied assets, Lucide React for every icon, the local shadcn/ui `Button` primitive for every reusable control, Tailwind utilities for every size/spacing/layout decision, and a small global token layer for colors and fonts. Persist the reference direction in the root layout and the route surface brief.

**Tech Stack:** Next.js 16.3 App Router, React 19.2, TypeScript, Tailwind CSS 4, shadcn/ui, `next/image`, `next/font`, Lucide React, Node's built-in test runner, Impeccable tooling, in-app browser.

**Spec:** `docs/superpowers/specs/2026-08-25-section-1-portfolio-hero-design.md`

## Global Constraints

- Copy the supplied reference content exactly except that the navbar shows only `public/logo blue transparent.png`, never “Brent Ortega.”
- Use `public/section1.jpg` as the hero image and preserve both supplied assets.
- Navigation, actions, social controls, and scroll cue stay inert; add no `href`, `onClick`, `download`, or scrolling behavior.
- Give controls hover and keyboard-focus feedback and respect reduced motion.
- Implement only section 1; do not create later portfolio sections or fabricate claims.
- Use Poppins for the sans family and keep Geist Mono available for code.
- Use Lucide React for every icon and shadcn/ui's generated local `Button` primitive for navigation, actions, and social controls.
- Use Tailwind's standard sizing, spacing, and breakpoint utilities. Do not add CSS `px` units or arbitrary pixel classes such as `w-[100px]`.
- Preserve one `h1`, semantic landmarks, WCAG AA contrast, and standard Tailwind touch-target sizes of at least `size-11` or `h-11`.
- Follow the installed Next.js 16 docs in `node_modules/next/dist/docs/`, including `Image`'s `fill`/`preload` guidance.

## File Map

- Create `app/components/section-one.tsx`: owns the complete visual and semantic implementation of section 1.
- Modify `app/page.tsx`: renders only `SectionOne`.
- Modify `app/layout.tsx`: updates metadata and emits the durable direction contract as the first body artifact.
- Modify `app/globals.css`: keeps font/color tokens and establishes the dark page canvas without layout sizing.
- Modify `package.json` and `pnpm-lock.yaml`: add `lucide-react` and a built-in Node test script.
- Create `components.json`: records shadcn/ui's project configuration.
- Create `components/ui/button.tsx`: owns the generated and locally customizable shadcn/ui button primitive.
- Create `lib/utils.ts`: owns shadcn/ui's `cn()` class-merging helper.
- Create `tests/section-one.test.tsx`: renders the real React route and guards content, inert controls, semantic structure, asset usage, and the no-pixel sizing rule.
- Create `.impeccable/surfaces/app-page-tsx.md`: records route-specific Persuade strategy.
- Add `public/section1.jpg` and `public/logo blue transparent.png`: user-supplied shipping assets with embedded provenance.
- Create `.impeccable/review/hero-repro.png`, `.impeccable/review/desktop.png`, and `.impeccable/review/mobile.png`: visual verification evidence.
- Create `DESIGN.md` and `.impeccable/design.json` at finish: documents the implemented visual system.

---

### Task 1: Establish the route contract, assets, and structural test

**Files:**
- Create: `.impeccable/surfaces/app-page-tsx.md`
- Create: `tests/section-one.test.tsx`
- Create: `app/components/section-one.tsx`
- Modify: `app/page.tsx`
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Create: `components.json`
- Create: `components/ui/button.tsx`
- Create: `lib/utils.ts`
- Modify metadata: `public/section1.jpg`
- Modify metadata: `public/logo blue transparent.png`

**Interfaces:**
- Consumes: `public/section1.jpg`, `public/logo blue transparent.png`, and the exact copy in the approved spec.
- Produces: `SectionOne(): React.JSX.Element`, imported by the `/` route; `pnpm test` renders the real route through React DOM Server.

- [ ] **Step 1: Read the authoritative Next.js image guide and the Impeccable craft floor**

Read these before UI code:

```text
node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md
.agents/skills/impeccable/reference/craft-floor.md
```

Use `Image fill preload sizes="100vw"` for the hero because it is the LCP image; its parent must be positioned. Use the logo's intrinsic `width` and `height` values and crop only its transparent canvas through Tailwind object utilities.

- [ ] **Step 2: Write the route surface brief**

Create a temporary body file through `apply_patch` with this exact content:

```markdown
## Scope and Mode

Primary target: `app/page.tsx`. Visitor mode: Persuade. This brief covers only section 1 of the portfolio homepage.

## Audience, Job, and Action

Visitors evaluate Brent's full-stack and web-design capability, review the value proposition, and recognize future paths to work, experience, contact, social profiles, and a resume. Controls are intentionally inert in this iteration.

## Content and Constraints

Use the user-supplied desktop reference, `public/section1.jpg`, `public/logo blue transparent.png`, and the approved copy. Preserve the dark blue workstation composition. Use standard Tailwind sizing utilities only and implement no later sections.

## Chosen Direction and Memorable Moment

A faithful layered recreation: floating dark-glass navigation above left-weighted copy, with the electric-blue workstation dominating the right. The memorable moment is the blue-emphasized promise sitting inside the developer's real working environment.

## Unresolved Decisions

Real destinations, contact details, resume file, project data, experience data, and social URLs will be supplied in later sections.
```

Write the final brief with:

```powershell
node .agents\skills\impeccable\scripts\surface-brief.mjs write app/page.tsx .impeccable\surface-brief-body.md
```

Then remove only the temporary body file through `apply_patch`. Verify the final path is `.impeccable/surfaces/app-page-tsx.md`.

- [ ] **Step 3: Write the failing structural test**

Add `tsx` as a dev dependency, then create `tests/section-one.test.tsx`:

```tsx
import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";

import Home from "../app/page";

test("section one renders the approved content and assets", () => {
  const html = renderToStaticMarkup(<Home />);

  assert.match(html, /section1\.jpg/);
  assert.match(html, /logo%20blue%20transparent\.png/);
  assert.match(html, /FULL-STACK DEVELOPER &amp; WEB DESIGNER/);
  assert.match(html, /I build digital solutions/);
  assert.match(html, /fast, modern,/);
  assert.match(html, /user-focused\./);
  assert.match(html, /View My Work/);
  assert.match(html, /Contact Me/);
  assert.match(html, /Download Resume/);
  assert.doesNotMatch(html, /Brent Ortega/);
});
```

Add this script to `package.json`:

```json
"test": "node --import tsx --test tests/*.test.tsx"
```

- [ ] **Step 4: Run the test and verify RED**

Run:

```powershell
corepack pnpm test
```

Expected: FAIL because the rendered default page does not contain the approved section-1 content or assets.

- [ ] **Step 5: Initialize shadcn/ui and add its Button component**

Run:

```powershell
corepack pnpm dlx shadcn@latest init -d --pointer
corepack pnpm dlx shadcn@latest add button
corepack pnpm add lucide-react
corepack pnpm add -D tsx
```

The current shadcn CLI supports Tailwind v4 and React 19. These commands must create `components.json`, `components/ui/button.tsx`, and `lib/utils.ts`, add Lucide and shadcn dependencies to `package.json`, update `pnpm-lock.yaml`, and merge theme variables into `app/globals.css`. Do not hand-edit the lockfile. Preserve the existing Poppins font mapping when reconciling the generated CSS.

- [ ] **Step 6: Implement the minimal semantic section**

Create `app/components/section-one.tsx` as a server component. Import `Button` from `@/components/ui/button` and all interface icons from `lucide-react`. Export exactly:

```tsx
export function SectionOne(): React.JSX.Element
```

Use constants with these exact values:

```tsx
const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

const socialItems = [
  { label: "GitHub", Icon: Github },
  { label: "LinkedIn", Icon: Linkedin },
  { label: "Email", Icon: Mail },
  { label: "Location", Icon: MapPin },
];
```

The component must include:

```tsx
<section aria-labelledby="hero-title">
  <Image src="/section1.jpg" alt="" fill preload sizes="100vw" />
  <header>
    <nav aria-label="Primary navigation">...</nav>
  </header>
  <main>
    <p>FULL-STACK DEVELOPER &amp; WEB DESIGNER</p>
    <h1 id="hero-title">
      I build digital solutions that are <span>fast, modern,</span> and <span>user-focused.</span>
    </h1>
    <p>
      I&apos;m a Full-Stack Developer and Web Designer passionate about building clean,
      responsive, and impactful web applications. I enjoy turning ideas into functional
      solutions that solve real-world problems.
    </p>
  </main>
</section>
```

Render every navigation item, action, and social control as `<Button type="button">` with no handlers. Use shadcn `variant` and `size` props as the accessible primitive baseline, then use Tailwind `className` values to reproduce the reference. Modify `app/page.tsx` to:

```tsx
import { SectionOne } from "./components/section-one";

export default function Home() {
  return <SectionOne />;
}
```

- [ ] **Step 7: Add asset provenance**

Run:

```powershell
node .agents\skills\impeccable\scripts\embed-prompt.mjs public\section1.jpg --prompt "Origin: user-supplied portfolio hero background. Provided for section 1 on 2026-08-25; preserve the blue-lit developer workstation scene."
node .agents\skills\impeccable\scripts\embed-prompt.mjs "public\logo blue transparent.png" --prompt "Origin: user-supplied transparent BRENT brand wordmark. Provided for the section-1 navbar on 2026-08-25."
node .agents\skills\impeccable\scripts\embed-prompt.mjs --scan public
```

Expected scan: `2 rasters, 0 missing`.

- [ ] **Step 8: Run the test and verify GREEN**

Run:

```powershell
corepack pnpm test
```

Expected: PASS.

- [ ] **Step 9: Commit**

```powershell
git add .impeccable/surfaces/app-page-tsx.md tests/section-one.test.tsx app/components/section-one.tsx app/page.tsx components.json components/ui/button.tsx lib/utils.ts app/globals.css package.json pnpm-lock.yaml public/section1.jpg "public/logo blue transparent.png"
git commit -m "feat: add portfolio section one structure"
```

### Task 2: Reproduce the approved visual system responsively

**Files:**
- Modify: `tests/section-one.test.tsx`
- Modify: `app/components/section-one.tsx`

**Interfaces:**
- Consumes: `SectionOne()` and the two asset paths established in Task 1.
- Produces: the complete responsive section-1 composition with inert controls and visual-only interaction states.

- [ ] **Step 1: Add the failing visual-contract test**

Append this test:

```tsx
test("section one keeps controls inert and uses Tailwind sizing without pixel literals", () => {
  const html = renderToStaticMarkup(<Home />);

  assert.match(html, /min-h-svh/);
  assert.match(html, /lg:grid-cols-2/);
  assert.match(html, /hover:/);
  assert.match(html, /focus-visible:/);
  assert.match(html, /motion-reduce:/);
  assert.doesNotMatch(html, /<a\b/);
  assert.doesNotMatch(html, /\bhref=/);
  assert.doesNotMatch(html, /\d+(?:\.\d+)?px\b/);
  assert.doesNotMatch(html, /\[[^\]]*\d+(?:\.\d+)?px[^\]]*\]/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.equal((html.match(/<button\b/g) ?? []).length, 13);
});
```

- [ ] **Step 2: Run the test and verify RED**

Run `corepack pnpm test`.

Expected: FAIL because the minimal component does not yet contain the responsive layout and interaction classes.

- [ ] **Step 3: Implement the full Tailwind composition**

Use this class architecture in `SectionOne`; keep all sizing on Tailwind's standard scale:

```tsx
<section
  aria-labelledby="hero-title"
  className="relative isolate min-h-svh overflow-hidden bg-slate-950 text-white"
>
  <Image
    src="/section1.jpg"
    alt=""
    fill
    preload
    sizes="100vw"
    className="-z-30 object-cover object-center sm:object-right"
  />
  <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/20" />
  <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90" />

  <div className="mx-auto flex min-h-svh w-full max-w-screen-2xl flex-col px-4 py-5 sm:px-6 lg:px-8">
    {/* SiteHeader */}
    {/* HeroContent */}
    {/* SocialLinks */}
    {/* ScrollCue */}
  </div>
</section>
```

Apply these component rules:

- Header: `rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6`; logo uses `h-10 w-32 object-cover object-center sm:w-40`; desktop nav uses `hidden items-center gap-8 lg:flex`.
- Main composition: `grid flex-1 items-center py-14 sm:py-16 lg:grid-cols-2 lg:py-20`; hero copy uses `max-w-2xl space-y-7`.
- Role label: rounded full, blue border/dot, uppercase, `text-xs`, and tracked lettering.
- Heading: `text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl`; electric-blue phrases use `text-blue-500`.
- Description: `max-w-xl text-base leading-8 text-slate-300 sm:text-lg`.
- Actions: wrapping `flex` row with `gap-3`; every control is at least `h-11`, uses `rounded-lg`, and carries `transition`, `hover:-translate-y-0.5`, `focus-visible:ring-2`, `focus-visible:ring-blue-400`, `motion-reduce:transform-none`, and `motion-reduce:transition-none`.
- Primary action: blue field with white content and a controlled blue shadow. Secondary actions: translucent dark fields with cool-gray borders.
- Social controls: `size-11` square buttons with the same border, focus, and motion language.
- Scroll cue: bottom-centered, hidden below `md`, with a bordered mouse outline, a small blue indicator, and the uppercase `SCROLL DOWN` label.
- Mobile: hide centered nav, keep logo and header resume control, stack or wrap actions, preserve readable copy, and let the overlays carry contrast.

Do not introduce style props containing sizes, CSS `px` units, or arbitrary pixel classes.

- [ ] **Step 4: Run tests and lint**

Run:

```powershell
corepack pnpm test
corepack pnpm lint
```

Expected: both exit 0 with no test failures or ESLint errors.

- [ ] **Step 5: Commit**

```powershell
git add tests/section-one.test.tsx app/components/section-one.tsx
git commit -m "feat: style responsive portfolio hero"
```

### Task 3: Add metadata, global canvas, and the durable direction contract

**Files:**
- Modify: `tests/section-one.test.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: the existing Poppins/Geist font variables and `children` in `RootLayout`.
- Produces: portfolio metadata, a dark global canvas, and the auditable seed key `user-pinned-section1-reference` in built HTML.

- [ ] **Step 1: Add the failing layout-contract test**

Extend the test file:

```tsx
import RootLayout, { metadata } from "../app/layout";

test("root layout identifies the portfolio and preserves the direction contract", () => {
  const html = renderToStaticMarkup(
    <RootLayout>
      <main>Fixture</main>
    </RootLayout>,
  );

  assert.equal(metadata.title, "Brent | Full-Stack Developer");
  assert.match(html, /user-pinned-section1-reference/);
  assert.match(html, /impeccable-direction-contract/);
  assert.doesNotMatch(html, /\d+(?:\.\d+)?px\b/);
});
```

- [ ] **Step 2: Run the test and verify RED**

Run `corepack pnpm test`.

Expected: FAIL because the current metadata and layout contain neither the portfolio title nor the direction-contract seed.

- [ ] **Step 3: Update metadata and emit the contract**

Set metadata to:

```tsx
export const metadata: Metadata = {
  title: "Brent | Full-Stack Developer",
  description:
    "Full-stack developer and web designer building fast, modern, and user-focused digital solutions.",
};
```

Define a contract string containing the approved THESIS, OWN-WORLD, STORY, FIRST VIEWPORT, FORM, and exact FINISH line from the spec. As the first child of `<body>`, render a React-safe `<template data-impeccable-direction-contract>` whose `dangerouslySetInnerHTML` is the HTML comment. The literal must contain `user-pinned-section1-reference` and remain under 150 words.

Keep the existing Poppins and Geist Mono variables. Give `<body>` only standard Tailwind layout classes:

```tsx
<body className="min-h-svh bg-slate-950 text-slate-50">
```

- [ ] **Step 4: Simplify the global canvas**

Keep the existing Tailwind import and font theme mapping. Use:

```css
:root {
  --background: #020812;
  --foreground: #f8fafc;
  color-scheme: dark;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-poppins);
}
```

Remove the automatic light/dark media switch so the approved section remains consistently dark. Add no sizing declarations.

- [ ] **Step 5: Run tests and build**

Run:

```powershell
corepack pnpm test
corepack pnpm lint
corepack pnpm build
rg -n "user-pinned-section1-reference" .next\server\app
```

Expected: tests, lint, and build exit 0; `rg` finds the seed key in built output.

- [ ] **Step 6: Commit**

```powershell
git add tests/section-one.test.tsx app/layout.tsx app/globals.css
git commit -m "feat: finalize portfolio hero shell"
```

### Task 4: Inspect, correct, review, and document the built world

**Files:**
- Create: `.impeccable/review/hero-repro.png`
- Create: `.impeccable/review/desktop.png`
- Create: `.impeccable/review/mobile.png`
- Modify: `app/components/section-one.tsx`, `app/layout.tsx`, `app/globals.css`
- Create: `DESIGN.md`
- Create: `.impeccable/design.json`

**Interfaces:**
- Consumes: the live `/` route, the approved reference image, the direction contract, the craft floor, and the detector output.
- Produces: validated desktop/mobile screenshots, a finish-review verdict, and durable design documentation.

- [ ] **Step 1: Refresh the user's existing browser tab**

Reuse the claimed in-app browser tab at `http://localhost:3000/`; do not open a duplicate. Reload after HMR/build settles and verify the title, visible copy, one `h1`, and the rendered background/logo.

- [ ] **Step 2: Capture the first inspection round**

Read the Browser skill's `screenshots` and viewport-capability documentation. Capture:

- `.impeccable/review/hero-repro.png` at the reference frame `1280×911`.
- `.impeccable/review/desktop.png` at the user's `1922×912` viewport.
- `.impeccable/review/mobile.png` at `390×844`.

Before each capture, return to the document top and wait for fonts/images. Open each saved image once and reject blank, partially loaded, wrongly sized, or animation-hidden evidence.

- [ ] **Step 3: Run one detector pass**

Run exactly once:

```powershell
node .agents\skills\impeccable\scripts\detect.mjs --json app\page.tsx app\components\section-one.tsx app\layout.tsx app\globals.css
```

Apply mechanical findings together with the visual defects from the desktop/mobile comparison in one batch. Keep the approved reference composition and Tailwind sizing constraint intact.

- [ ] **Step 4: Confirm the correction batch**

Run one final screenshot round over the same three viewport files. Re-run:

```powershell
corepack pnpm test
corepack pnpm lint
corepack pnpm build
node .agents\skills\impeccable\scripts\embed-prompt.mjs --scan public
```

Do not run the detector a second time.

- [ ] **Step 5: Run the shipped Impeccable finish reviewer**

Spawn `impeccable_finish_reviewer` with no forked conversation history. Pass:

- Original request and confirmed inert-control behavior.
- Artifact: `app/page.tsx` and `app/components/section-one.tsx`.
- Screenshots: the three files under `.impeccable/review/`.
- Reference: `C:\Users\brent\Music\Portflio\inspo\6073107873245368976.jpg`.
- Direction contract and seed key.
- Detector findings.
- Craft floor: `.agents/skills/impeccable/reference/craft-floor.md`.
- Code-led execution; the supplied user reference is the critique authority.

Follow the reviewer's exact disposition (`recapture`, `rebuild`, `fix`, or `ship`). For `fix`, batch the named fixes, recapture the same viewports, and send them back to the same reviewer for a verdict pass. Stop after two attended correction rounds and present any unresolved findings to the user.

- [ ] **Step 6: Document the implemented system**

After the final correction, spawn `impeccable_documenter` with no forked history and pass:

- Project root.
- Artifact boundary: `app/page.tsx` and `app/components/section-one.tsx`.
- Final direction contract.
- `PRODUCT.md`.
- `.agents/skills/impeccable/reference/document.md`.

Require it to create/update `DESIGN.md` and the Impeccable sidecar from the implemented result, not the intent. If any correction follows documentation, rerun the documenter.

- [ ] **Step 7: Final verification and commit**

Run fresh:

```powershell
corepack pnpm test
corepack pnpm lint
corepack pnpm build
git diff --check
git status --short
```

Inspect the final diff to ensure only section-1 work, asset provenance, review evidence, and Impeccable documentation are included. Commit the final review/documentation batch:

```powershell
git add .impeccable/review DESIGN.md .impeccable app tests public package.json pnpm-lock.yaml
git commit -m "docs: record portfolio hero design system"
```
