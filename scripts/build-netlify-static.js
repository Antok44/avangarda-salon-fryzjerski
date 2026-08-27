import { readdir, readFile, copyFile, writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const clientDir = path.join(root, "dist", "client");
const ssrEntry = path.join(root, "node_modules", ".nitro", "vite", "services", "ssr", "index.js");
const assetsDir = path.join(root, "src", "assets");
const uploadsDirs = ["/mnt/user-uploads", "/tmp/user-uploads"];

async function fileExists(p) {
  return stat(p).then(() => true).catch(() => false);
}

async function findUpload(filename) {
  for (const dir of uploadsDirs) {
    const p = path.join(dir, filename);
    if (await fileExists(p)) return p;
  }
  return null;
}

async function main() {
  // 1. Render the app via the production SSR entry.
  const mod = await import(ssrEntry);
  const ssr = mod.default || mod;
  const request = new Request("http://localhost:8080/");
  const response = await ssr.fetch(request, {}, {});
  if (!response.ok) {
    throw new Error(`SSR render failed: ${response.status} ${response.statusText}`);
  }
  let html = await response.text();

  // 2. Copy all uploaded images used by the app and rewrite their Lovable asset URLs to local paths.
  const assetFiles = (await readdir(assetsDir)).filter((f) => f.endsWith(".asset.json"));
  for (const assetFile of assetFiles) {
    const assetJson = JSON.parse(await readFile(path.join(assetsDir, assetFile), "utf-8"));
    const filename = assetJson.original_filename;
    const lovableUrl = assetJson.url;
    const sourcePath = await findUpload(filename);
    if (!sourcePath) {
      console.warn(`Warning: could not find source image ${filename}`);
      continue;
    }
    await copyFile(sourcePath, path.join(clientDir, filename));
    html = html.replace(new RegExp(lovableUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), `/${filename}`);
  }

  // 3. Use Polish lang attribute.
  html = html.replace('<html lang="en">', '<html lang="pl">');

  await writeFile(path.join(clientDir, "index.html"), html, "utf-8");
  console.log("Generated dist/client/index.html for static Netlify deploy");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
