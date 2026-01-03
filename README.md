# Humanities Web Portfolio

This repository contains a portfolio website built as part of my coursework for Introduction to Humanities Honors (HUM-1020H) at Valencia College.  
The project presents written work and reflections using a content-first, static-site approach.

🔗 Live site: <https://josuebouchard.github.io/humanities-web-portfolio/>

---

## Overview

The website is a **static, content-driven portfolio** built with Astro and MDX, designed to handle a large amount of written material (“blog-style” content) in a structured and maintainable way.

The focus of the project was:

- Clear presentation of long-form written content
- Simple, consistent navigation
- Fast load times and static deployment
- A clean separation between content and layout

---

## Tech Stack

- **Astro** - static site generation and component framework
- **MDX** - content authoring with Markdown + JSX
- **Tailwind CSS** - utility-first styling
- **Tailwind Typography** - readable, consistent prose styling
- **DaisyUI** - component abstractions on top of Tailwind
- **GitHub Pages** - static hosting
- **GitHub Actions** - building and deployment
- **Bun** - a faster javascript runtime that allows for faster installation

This stack was chosen to support content-heavy pages while keeping the site fast, readable, and easy to maintain.

---

## Getting Started

To run this project locally:

1. Clone the repo
2. Run `bun install`
3. Run `bun run dev`

---

## Architecture & Content Model

- Written content is authored in **MDX**, allowing clean separation between content and presentation.
- Layout and styling are handled via reusable Astro components.
- UI elements are composed using Tailwind utilities and DaisyUI components to reduce custom CSS.
- The site is fully static, with no runtime backend dependencies.

This structure makes it easy to add or update content without touching layout logic.

---

## Design Philosophy

- **Content-first** — prioritize readability and structure over visual complexity
- **Static by default** — avoid unnecessary client-side JavaScript
- **Consistency** — reuse layouts and components to reduce cognitive load
- **Maintainability** — simple build pipeline and predictable structure

---

## Lessons Learned

- Bun proved to be a high-performance alternative to Node.js and standard package managers (npm/yarn/pnpm), significantly reducing environment setup and CI/CD build times.
- Using **Astro + MDX** is an effective approach for content-heavy sites
- Designing reusable layouts early reduces duplication and styling drift
- Utility-first CSS scales well when paired with a component library
- Static-site generation simplifies deployment and long-term maintenance

---

## What I Would Do Differently

If revisiting this project today, I would:

- Improve semantic HTML and accessibility annotations
- Replace Tailwind Typography for custom more appropiate tailwind styling to ensure good maintainability and compatibility with other libraries
- Add content validation or linting for MDX files
- Document the content structure more clearly for future contributors

---

## Status

This project is complete and not actively maintained.  
It is preserved as a snapshot of coursework and as a reference point for my progression in modern web tooling and content-oriented site design.

---

## Author

Josué Bouchard
