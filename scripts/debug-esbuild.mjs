import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd(), "node_modules");
const pkg = (name) => path.join(root, name);
const payload = {
  sessionId: "1fb456",
  runId: "post-fix",
  hypothesisId: "A",
  location: "scripts/debug-esbuild.mjs",
  message: "esbuild platform diagnostic before vite",
  data: {
    arch: process.arch,
    platform: process.platform,
    node: process.version,
    execPath: process.execPath,
    esbuildPkg: fs.existsSync(pkg("esbuild")),
    darwin64: fs.existsSync(pkg("esbuild-darwin-64")),
    darwinArm64: fs.existsSync(pkg("esbuild-darwin-arm64")),
    esbuildBin: fs.existsSync(path.join(root, "esbuild/bin/esbuild")),
  },
  timestamp: Date.now(),
};

if (payload.data.darwin64 && !payload.data.darwinArm64 && process.arch === "arm64") {
  payload.hypothesisId = "A";
} else if (!payload.data.darwin64 && !payload.data.darwinArm64) {
  payload.hypothesisId = "B";
} else if (process.arch === "x64" && payload.data.darwinArm64 && !payload.data.darwin64) {
  payload.hypothesisId = "D";
} else if (payload.data.darwin64 && payload.data.darwinArm64) {
  payload.hypothesisId = "C";
}

// #region agent log
fetch("http://127.0.0.1:7564/ingest/414e9d89-aec3-48d8-ad84-0c2cb25b89e7", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Debug-Session-Id": "1fb456",
  },
  body: JSON.stringify(payload),
}).catch(() => {});
// #endregion

console.log("[debug-esbuild]", JSON.stringify(payload.data));
