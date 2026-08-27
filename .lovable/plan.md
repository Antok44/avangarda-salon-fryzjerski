# Deploy Salon Avangarda to Netlify

## Goal
Publish the "Salon Fryzjerski Avangarda" website to Netlify hosting.

## What to do
Deploying a TanStack Start project to Netlify requires producing a Netlify-compatible build and wiring it to a Netlify site. The work is split into local build configuration and the Netlify dashboard/CLI steps.

### 1. Build configuration (project files)
- Create `netlify.toml` at the project root with:
  - `build.command` set to the production build command.
  - `build.publish` pointed at the correct static output directory.
  - Redirects/spa fallback rules for TanStack Start client-side routing.
- Confirm the build command in `package.json` (e.g. `bun run build`) and adjust if Netlify needs a different entry.
- If the current TanStack Start target is Cloudflare Workers, evaluate whether a Netlify adapter or static prerender is required. Add the adapter and update `vite.config.ts` only if needed.

### 2. Local verification
- Run the production build locally to ensure the site generates without errors.
- Serve the build output locally (e.g. with Netlify CLI `netlify dev` or a static server) and spot-check the tabs, gallery, and Booksy link.

### 3. Netlify deployment
- Create a new site in the Netlify dashboard (or via `netlify init` in the CLI).
- Link the site to the GitHub repository (if already connected) for continuous deployment, or deploy manually by dragging the build output into Netlify.
- Configure the site name/domain and verify the live URL.

### 4. Lovable-side notes
- This project is currently unpublished on Lovable. Netlify will become the primary public host.
- If the user later wants the Lovable publish button to remain the main deployment, do not proceed with Netlify; use the Lovable Publish flow instead.

## Notes
- TanStack Start’s default Nitro/Worker target may need an adapter for Netlify Edge/Functions. The plan includes checking that before editing.
- No source-code changes are needed for content or design; this is purely a deployment/hosting configuration task.
