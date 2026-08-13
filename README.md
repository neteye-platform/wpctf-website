# WP CTF Website

Source code for the official [WP CTF](https://wpctf.it/) website.

WP CTF is an on-site cybersecurity Capture the Flag competition for university
students, organized by [Würth IT Italy](https://www.wuerth-it.it/) and hosted in
Bolzano, South Tyrol. Participants exploit software vulnerabilities, collect
hidden flags, and compete for prizes.

## Repository structure

The frontend application lives in [`website/`](website/). It is a Vue 3 and
TypeScript single-page application built with Vite and styled with Tailwind CSS.

The production image is built from the root [`Dockerfile`](Dockerfile). The
compiled application is served by an unprivileged nginx container configured by
[`nginx.conf`](nginx.conf).

## Quick start

The project uses Node.js 26 in Docker and CI. From the repository root:

```sh
cd website
npm ci
npm run dev
```

Vite prints the local development URL when the server starts. See the
[frontend README](website/README.md) for the complete command reference and E2E
test setup.

## Quality checks

Run these commands from `website/`:

```sh
npm run build
npm run lint
npm run test:e2e
```

The build includes TypeScript checking. Playwright starts a local Vite server
automatically when `BASE_URL` is not set.

## Container image

Build and run the production image from the repository root:

```sh
docker build -t wpctf-website .
docker run --rm -p 8080:8080 wpctf-website
```

The website is then available at <http://localhost:8080>.

Pull requests build the container and run the Playwright suite against it in
Chromium. Tags matching `v<major>.<minor>.<patch>` trigger the release workflow
that publishes the container image.

## Previous editions

- [2025](https://2025.wpctf.it/)
- [2024](https://2024.wpctf.it/)
- [2023](https://2023.wpctf.it/)
