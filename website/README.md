# WP CTF Frontend

Vue 3 and TypeScript single-page application for the
[WP CTF website](https://wpctf.it/). Vite provides the development and build
tooling, Pinia manages application state, Vue Router handles navigation, and
Tailwind CSS provides the styling system.

Repository-level build, container, and release information is available in the
[root README](../README.md).

## Requirements

- Node.js 26, matching Docker and CI
- npm

## Setup

Run all commands in this directory:

```sh
npm ci
npm run dev
```

Vite prints the local URL when the development server is ready. The application
currently exposes the home page at `/` and the sponsors page at `/sponsors`.

## Available commands

| Command              | Purpose                                                |
| -------------------- | ------------------------------------------------------ |
| `npm run dev`        | Start the Vite development server.                     |
| `npm run build`      | Type-check and create the production build in `dist/`. |
| `npm run build-only` | Create a production build without type-checking.       |
| `npm run type-check` | Check Vue and TypeScript sources with `vue-tsc`.       |
| `npm run preview`    | Serve the production build locally.                    |
| `npm run lint`       | Lint the project and apply ESLint fixes.               |
| `npm run format`     | Format files under `src/` with Prettier.               |
| `npm run test:e2e`   | Run the Playwright end-to-end suite.                   |

## End-to-end tests

Install the Playwright browsers once after installing dependencies:

```sh
npx playwright install
```

Run the complete suite or select a browser:

```sh
npm run test:e2e
npm run test:e2e -- --project=chromium
```

For interactive debugging:

```sh
npm run test:e2e -- --debug
```

By default, Playwright starts the Vite development server at
<http://localhost:5173>. Set `BASE_URL` to test an already-running deployment;
when it is set, Playwright does not start a local server.

CI builds the production container and runs the Chromium project against it.
