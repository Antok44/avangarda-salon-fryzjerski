import { readdir, readFile, copyFile, mkdir, writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const clientDir = path.join(root, "dist", "client");
const ssrEntry = path.join(root, "node_modules", ".nitro", "vite", "services", "ssr", "index.js");
const uploadsDir = "/mnt/user-uploads";

async function fileExists(p) {
  return stat(p).then(() => true).catch(() => false);
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

  // 2. Copy original uploaded images into dist/client so they are served as static files.
  const imageMappings = [
    { assetId: "ea327f34-ed29-4e89-a1c0-6a414478341b", filename: "ava_logo.jpeg" },
    { assetId: "ed79a37d-1be5-464f-b5da-a54a5b4f26c6", filename: "ava.jpeg" },
    { assetId: "9a8170e8-4d7c-4c69-976c-08a4eb92d314", filename: "ava1.jpeg" },
    { assetId: "059c0d32-72d5-4ae9-a2a3-b44c6ad10b8c", filename: "ava_met1.jpg" },
  ];

  const uploadsMirror = "/tmp/user-uploads";
  for (const { assetId, filename } of imageMappings) {
    const sourcePath = (await fileExists(path.join(uploadsDir, filename)))
      ? path.join(uploadsDir, filename)
      : path.join(uploadsMirror, filename);
    if (!(await fileExists(sourcePath))) {
      console.warn(`Warning: could not find source image ${filename}`);
      continue;
    }
    await copyFile(sourcePath, path.join(clientDir, filename));
    // Replace the Lovable dev asset URL with the local static filename.
    const lovableUrl = `/__l5e/assets-v1/${assetId}/${filename}`;
    html = html.replace(new RegExp(lovableUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), `/${filename}`);
  }

  // 3. Make sure the HTML shell uses Polish lang and includes social metadata.
  html = html.replace('<html lang="en">', '<html lang="pl">');

  await writeFile(path.join(clientDir, "index.html"), html, "utf-8");
  console.log("Generated dist/client/index.html for static Netlify deploy");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
