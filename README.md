# Portfolio (Astro + Tailwind)

A minimal personal portfolio built with Astro, Tailwind CSS v4, and local content collections for blogs.

> Design note: The visual design and UI patterns in this project are inspired by Ted Awf's portfolio (https://tedawf.com) and adapted to fit my own content and branding.

- Sticky, semantic navbar with hover-dim effect: [`Navbar`](src/components/Navbar.astro)
- Hero with social links and Resume button served from [`public/Resume.pdf`](public/Resume.pdf): [`Hero`](src/components/Hero.astro)
- Work/Education tabbed timeline: [`WorkExperience`](src/components/WorkExperience.astro)
- Featured projects section and reusable cards: [`FeaturedProjects`](src/components/FeaturedProjects.astro), [`ProjectCard`](src/components/ProjectCard.astro)
- Projects page route: [`/projects`](src/pages/projects.astro)
- Blogs listing and post pages with Markdown/MDX content:
  - [`/blogs`](src/pages/blogs/index.astro)
  - [`/blogs/[slug]`](src/pages/blogs/[slug].astro)
- Sticky footer with social links: [`Footer`](src/components/Footer.astro)

## Tech Stack

- Astro 6 (static output): [`astro.config.mjs`](astro.config.mjs)
- Tailwind CSS v4 via Vite plugin: [`src/styles/global.css`](src/styles/global.css)
- Astro Content Collections + MDX:
  - config: [`src/content.config.ts`](src/content.config.ts)
  - content: [`src/content/blog`](src/content/blog)
- Lucide icons and SVG brand icons:
  - package: `@lucide/astro`
  - local icons: [`src/assets/icons`](src/assets/icons)
- Astro image optimization via `astro:assets` + `sharp`

## Getting Started

- Prerequisites: Node.js 22.12+
- Package manager: `pnpm`

Install dependencies:

```sh
pnpm install
```

Run dev server:

```sh
pnpm run dev
```

Build for production:

```sh
pnpm run build
```

Preview production build:

```sh
pnpm run preview
```

## Project Structure

```text
public/
  Resume.pdf
  fonts/
src/
  assets/
    icons/
    projects_images/
  components/
    FeaturedProjects.astro
    Footer.astro
    Hero.astro
    Navbar.astro
    ProjectCard.astro
    WorkExperience.astro
  content/
    blog/
  data/
    projects.js
  layouts/
    Layout.astro
  pages/
    index.astro
    projects.astro
    blogs/
      index.astro
      [slug].astro
  styles/
    global.css
  content.config.ts
```

## Routing

- `/` renders the home page (Hero, WorkExperience, FeaturedProjects).
- `/projects` renders all project cards.
- `/blogs` renders blog index from content collection.
- `/blogs/[slug]` renders individual Markdown/MDX posts.

All routes are statically generated during build.

## Blogs

Create blog posts in [`src/content/blog`](src/content/blog) using `.md` or `.mdx` files.

Required frontmatter fields:

```yaml
---
title: "Post title"
description: "Short summary"
pubDate: 2026-05-23
tags:
  - Astro
draft: false
---
```

Optional field:

- `updatedDate`

Collection schema lives in [`src/content.config.ts`](src/content.config.ts).

## Resume

Place your PDF at [`public/Resume.pdf`](public/Resume.pdf). The Resume button in [`Hero`](src/components/Hero.astro) links to `/Resume.pdf` and opens in a new tab.

## Adding Projects

Edit the `projects` array in [`src/data/projects.js`](src/data/projects.js).

Example item:

```js
import SampleImage from "../assets/projects_images/sample.webp";

{
  title: "My App",
  description: "Short summary",
  image: SampleImage,
  technologies: ["Astro", "Tailwind"],
  links: {
    website: "https://example.com",
    github: "https://github.com/me/app",
  },
  featured: true,
}
```

## Styling

Global styles, fonts, and shared hover effects are defined in [`src/styles/global.css`](src/styles/global.css).

## Scripts

See [`package.json`](package.json) for available scripts:

- `dev`
- `build`
- `preview`
- `astro`