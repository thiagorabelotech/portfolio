# Engineering Guidelines & Code Conventions

This document establishes the architecture principles, conventions, and engineering standards for the **Thiago Rabelo Portfolio** project.

---

## 1. Core Principles

- **Language:** **100% English** across all code artifacts:
  - Component names, variables, functions, types, interfaces, files, directory names.
  - Code comments, commit messages, and documentation.
  - *(User-facing content can support Portuguese and English via the internationalization dictionary, but all internal identifiers must be strictly English).*
- **No Junior Patterns:**
  - No `any` types. Strict TypeScript typing throughout.
  - No copy-pasting monolithic chunks; build reusable, composable primitives.
  - No messy inline calculations or magic values in JSX.
  - No unsemantic `div` soups; use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Data-Driven Architecture:**
  - Content (projects, tech stacks, navigation items, bios) lives in strongly typed data modules (`src/data/`), cleanly decoupled from UI presentation.
  - Adding or modifying a project must only require editing a data record without touching component layout code.

---

## 2. Project Structure

```text
src/
├── app/
│   ├── layout.tsx         # Root layout with fonts, metadata, and theme wrappers
│   ├── page.tsx           # Single-page assembly composing section components
│   └── globals.css        # Tailwind CSS imports and custom design tokens
├── components/
│   ├── layout/            # Layout elements (Navbar, Footer, BackgroundSpotlight)
│   ├── sections/          # Page sections (HeroSection, CodeSection, UnitySection, 3DSection)
│   ├── ui/                # Atomic/reusable UI components (ProjectCard, TechBadge, NavIcon)
│   └── icons/             # Custom SVG icons matching the Figma hand-drawn / wireframe aesthetic
├── data/
│   ├── portfolioData.ts   # Strongly typed data source for all sections and projects
│   └── navigation.ts      # Navigation items, IDs, and section anchors
├── types/
│   └── portfolio.ts       # Domain types and component props contracts
└── utils/                 # Pure helper functions (formatting, class mergers)
```

---

## 3. Component Design Standards

1. **Explicit Props Interface:**
   - Every component must declare a strongly typed interface for its props (e.g., `interface ProjectCardProps`).
2. **Predictable Layout:**
   - Components accept an optional `className?: string` to allow minor contextual spacing adjustments without breaking encapsulated styles.
3. **Accessibility (a11y):**
   - Interactive elements must include accessible attributes (`aria-label`, `aria-current`, `title`).
   - All images must have meaningful `alt` descriptions.
   - Keyboard focus rings must be visible and aesthetically aligned.

---

## 4. Visual & Styling Conventions

- **Dark Minimalist Aesthetic:**
  - Rich dark background (`#0d0d0e` to `#080808`).
  - Radial spotlight backdrop effect matching the Figma design.
  - Subtle central connector line (`border-neutral-800` / `bg-neutral-800`) anchoring the visual flow.
- **Card Media Fade Mask:**
  - Project screenshots feature an organic gradient fade mask to seamlessly blend into the dark canvas.
- **Responsive by Default:**
  - Desktop-first or mobile-first with clean breakpoint parity (`sm:`, `md:`, `lg:`, `xl:`).

---

## 5. Definition of Done (DoD) per Milestone

1. Code compiles with zero TypeScript errors (`tsc --noEmit`).
2. ESLint passes with zero warnings (`npm run lint`).
3. Layout matches Figma reference across desktop and mobile screens.
4. Clean semantic markup verified.
