import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const clientDir = path.join(root, "dist", "client");
const serverDir = path.join(root, "dist", "server");

async function main() {
  const assets = await readdir(path.join(clientDir, "assets"));
  const cssFile = assets.find((f) => f.endsWith(".css"));
  const mainJs = assets.find((f) => f.startsWith("index-") && f.endsWith(".js"));
  const routesJs = assets.find((f) => f.startsWith("routes-") && f.endsWith(".js"));

  if (!cssFile || !mainJs) {
    throw new Error("Could not find hashed CSS/JS assets in dist/client/assets");
  }

  // Read the TanStack Start manifest to discover any additional preloads.
  const manifestFiles = (await readdir(serverDir).catch(() => [])).filter((f) =>
    f.startsWith("_tanstack-start-manifest_"),
  );
  const preloads = new Set();
  for (const manifestFile of manifestFiles) {
    const manifestPath = path.join(serverDir, manifestFile);
    const manifestText = await readFile(manifestPath, "utf-8");
    const matches = manifestText.matchAll(/preloads:\s*\[([^\]]*)\]/g);
    for (const match of matches) {
      const urls = match[1]
        .split(",")
        .map((s) => s.trim().replace(/['"]/g, ""))
        .filter(Boolean);
      for (const url of urls) preloads.add(url);
    }
  }

  const preloadLinks = [...preloads]
    .map((url) => `  <link rel="modulepreload" href="${url}">`)
    .join("\n");

  const html = `<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Salon Fryzjerski Avangarda — Fryzjer Lubin, Cedrowa 1b</title>
    <meta name="description" content="Salon Fryzjerski Avangarda w Lubinie — koloryzacja, baleyage, Air Touch, zabiegi odbudowujące i precyzyjne strzyżenia. Ocena 4,9★. Rezerwuj online.">
    <meta property="og:title" content="Salon Fryzjerski Avangarda — Lubin">
    <meta property="og:description" content="Elegancki salon fryzjerski w Lubinie. Koloryzacja, baleyage, zabiegi pielęgnacyjne i strzyżenia damskie oraz męskie u Ani.">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Karla:wght@300;400;500&display=swap">
    <link rel="stylesheet" href="/assets/${cssFile}">
${preloadLinks}
    <link rel="icon" href="/favicon.png" type="image/png">
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/assets/${mainJs}"></script>
    <script type="module" src="/assets/${routesJs}"></script>
  </body>
</html>
`;

  await writeFile(path.join(clientDir, "index.html"), html, "utf-8");
  console.log(`Generated dist/client/index.html for static Netlify deploy`);
  if (routesJs) console.log(`Preloaded route chunk: /assets/${routesJs}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
