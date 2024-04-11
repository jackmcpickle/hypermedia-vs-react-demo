# Hypermedia Vs React aproaches demo

Comparing different approaches to a dummy online store - [Vite](https://vitejs.dev/) SPA, [Nextjs](https://nextjs.org/) RSC, [Astro](https://astro.build/) with [Htmx](https://htmx.org/docs/)

Both [Astro](https://astro.build/) and [Nextjs](https://nextjs.org/) apps share db schema.

You will need to create a [Turso DB](turso.tech/) account and database and then add DB url and token to the .envs


### Run SPA

No dependencies, uses localStorage as temp DB.

```bash
cd vite
pnpm i
pnpm dev
```

### Run Nextjs RSC

Using React server components

```bash
cd nextjs-app
cp .env.example .env
# Add turso details to .env
pnpm i
pnpm dev
```

### Run Astro/Htmx

Using htmx and astro components, [Apline js](https://alpinejs.dev/) to handle small amount of frontend js (mobile menu toggle)

```bash
cd astro
cp .env.example .env
# Add turso details to .env
pnpm i
pnpm dev
```
