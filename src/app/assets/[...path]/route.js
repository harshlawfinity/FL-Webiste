import { access, readFile } from "fs/promises";
import path from "path";
import { HERO_BACKGROUND_IMAGES } from "@/lib/heroBackgrounds";

export const runtime = "nodejs";

const HERO_BACKING_FILES = HERO_BACKGROUND_IMAGES.map((src) =>
  src.replace(/^\/assets\//, "")
);

const MIME_BY_EXT = {
  webp: "image/webp",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
};

function contentTypeFor(filename) {
  const ext = path.extname(filename).slice(1).toLowerCase();
  return MIME_BY_EXT[ext] || "application/octet-stream";
}

// Serves /public/assets/* when present; otherwise CMS SEO hero aliases → default carousel files.
export async function GET(request, { params }) {
  const { path: pathParts } = await params;
  const filename = Array.isArray(pathParts) ? pathParts.join("/") : String(pathParts || "");
  if (!filename || filename.includes("..")) {
    return new Response("Not found", { status: 404 });
  }

  const publicFile = path.join(process.cwd(), "public", "assets", filename);

  try {
    await access(publicFile);
    const buffer = await readFile(publicFile);
    return new Response(buffer, {
      headers: {
        "Content-Type": contentTypeFor(filename),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    const slide = Number(new URL(request.url).searchParams.get("slide") || 0);
    const backing = HERO_BACKING_FILES[slide] || HERO_BACKING_FILES[0];
    const backingPath = path.join(process.cwd(), "public", "assets", backing);

    try {
      const buffer = await readFile(backingPath);
      return new Response(buffer, {
        headers: {
          "Content-Type": contentTypeFor(backing),
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    } catch {
      return new Response("Not found", { status: 404 });
    }
  }
}
