# NSR Ops Hub

Documentation portal for the North Star Racing admin team, drivers, and league members. It combines process docs with live series references (Cup + Truck) inside a single branded experience.

## Highlights

- **Multi-handbook navigation:** Custom sidebar groups for Member Docs, Admin Docs, Cup Series, and Truck Series with pill navigation that mirrors the Astro docs pattern.
- **NSR branding:** Centralized palette and typography overrides in `src/styles/theme.css` plus custom sidebar/top-nav components for the gold/charcoal look.
- **Content collections:** Markdown/MDX files under `src/content/docs/**` power each section. Hero CTA links and cards point at the highest priority guides.
- **Series data stubs:** Dedicated folders for Cup/Truck schedules, standings, rosters, and Race Clean tracking that can be wired to dynamic data later.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site locally
```

The Astro CLI is also available via `npm run astro -- <command>` (e.g., `npm run astro -- check`).

## Project Structure

```
.
├── public/                      # Static assets copied as-is to the build
├── src/
│   ├── assets/nsr/              # Branding images and logos
│   ├── components/starlight/    # Custom sidebar / site title overrides
│   ├── content/docs/            # Member, Admin, Cup, Truck, etc.
│   ├── styles/theme.css         # Global palette + Starlight overrides
│   └── content.config.ts        # Content collection schema (auto-generated)
├── astro.config.mjs             # Astro + Starlight configuration
├── package.json                 # Scripts and dependencies
└── tsconfig.json
```

Key content folders under `src/content/docs/`:

- `member/01-...` – league-wide documentation (Foreword, Preface, Sporting Regulations, Branding, etc.).
- `admin-documentation/**` – role definitions, templates, procedures.
- `cup-series/**` & `truck-series/**` – schedule, standings, roster, Race Clean stubs.

Add new guides by creating `.mdx` files with frontmatter (`title`, `description`). The slug is derived from folder/file names and must match the `astro.config.mjs` sidebar entries.

## Theming Notes

Brand colors and typography live in `src/styles/theme.css` using CSS variables (e.g., `--nsr-color-gold`, `--nsr-color-charcoal`). When tweaking colors:

1. Update the variables near the top of the file.
2. Verify both `[data-theme='dark']` and `[data-theme='light']` blocks.
3. Adjust component overrides (hero buttons, sidebar pills, TOC) to preserve contrast.

Logos are stored in `src/assets/nsr/` and referenced via frontmatter (`hero.image.file`) or the custom SiteTitle component.

## Deployment

Build output is static (`dist/`) and can be hosted on any static provider (Hostinger, Netlify, Vercel, etc.). Typical flow:

1. `npm run build`
2. Upload `dist/` or configure your host to run the build step automatically.
3. Point your domain to the hosting provider.

## Contributing

1. Create a feature branch.
2. Add or update content/components/styles.
3. Run `npm run lint`/`npm run build` (add lint script if desired).
4. Open a pull request describing the change.

For questions about Astro/Starlight, consult the [Astro docs](https://docs.astro.build/) and [Starlight guides](https://starlight.astro.build/). For NSR-specific decisions, check the admin documentation inside the site.
