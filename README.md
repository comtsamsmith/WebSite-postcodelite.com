# Postcode Lite

An Astro-hosted, faithful mirror of the current Postcode Lite website. The project preserves the original design, content, assets and public `.htm` URL structure, with telephone details removed as requested.

## Commands

```sh
pnpm install
pnpm dev
pnpm build
```

The production build is emitted to `dist/`.

The mirrored website lives in `public/`, so Astro copies every legacy URL and asset without rewriting it. `scripts/mirror-site.mjs` documents the source-page inventory and the phone-detail sanitisation applied during mirroring.
