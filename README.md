# Portfolio (React + Vite + Tailwind)

A minimal personal portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, and React Icons.

> Design note: The visual design and UI patterns in this project are strongly inspired by Ted Awf’s portfolio (https://tedawf.com) and adapted to fit my own content and branding.

- Sticky, semantic navbar with hover-dim effect via Framer Motion: [`Navbar`](src/components/Navbar.jsx) and [`navLinks`](src/components/Navbar.jsx)
- Hero with social links hover-dim and a Resume button served from [`public/Resume.pdf`](public/Resume.pdf): [`Hero`](src/components/Hero.jsx) and [`SocialLinks`](src/components/Hero.jsx)
- Work/Education tabbed timeline: [`WorkExperience`](src/components/WorkExperience.jsx)
- Featured projects section (stub with “view more”): [`FeaturedProjects`](src/components/FeaturedProjects.jsx)
- Projects page with simple path-based routing: [`Projects`](src/pages/Projects.jsx)
- Sticky footer using a flex layout: [`Footer`](src/components/Footer.jsx)
- App layout with sticky header, growing content area, and footer at the bottom: [`App`](src/App.jsx)

## Tech Stack

- React 19 + Vite: [index.html](index.html), [`main`](src/main.jsx), [`vite.config`](vite.config.js)
- Tailwind CSS v4 via plugin: [src/index.css](src/index.css)
- Framer Motion: hover animations
- React Icons: icon set

## Getting Started

- Prerequisites: Node.js 18+ recommended

Install dependencies:

```sh
npm install
```

Run dev server:

```sh
npm run dev
```

Lint:

```sh
npm run lint
```

Build for production:

```sh
npm run build
```

Preview production build:

```sh
npm run preview
```

## Project Structure

```
public/
  Resume.pdf
src/
  App.jsx
  index.css
  main.jsx
  assets/
  components/
    FeaturedProjects.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    WorkExperience.jsx
  pages/
    Projects.jsx
```

## Routing

This app uses minimal path-based rendering in [`App`](src/App.jsx):

- “Home” renders the main article (Hero, WorkExperience, FeaturedProjects)
- “Projects” renders [`Projects`](src/pages/Projects.jsx)

Deep links like /projects require SPA fallback (serve index.html for all routes) on your host.

## Resume

Place your PDF at [public/Resume.pdf](public/Resume.pdf). The Resume button in [`Hero`](src/components/Hero.jsx) links to `/Resume.pdf` and opens in a new tab.

## Adding Projects

- Projects page: edit the `projects` array in [`src/pages/Projects.jsx`](src/pages/Projects.jsx).
- Featured list on home: edit the `projects` array in [`src/components/FeaturedProjects.jsx`](src/components/FeaturedProjects.jsx).

Example item:

```js
{
  title: 'My App',
  description: 'Short summary',
  image: '/path-or-url.png',
  technologies: ['React', 'TailwindCSS'],
  links: { website: 'https://example.com', github: 'https://github.com/me/app' },
}
```

## Styling

Global styles and font are defined in [src/index.css](src/index.css). Layout uses a sticky header and a sticky footer via flex growth in [`App`](src/App.jsx) to keep the footer at the bottom on short pages.

## Scripts

See [package.json](package.json) for `dev`, `build`, `lint`, and `preview`.
