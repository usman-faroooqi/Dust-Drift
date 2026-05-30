import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sandbox = path.join(root, "artifacts", "mockup-sandbox");

const env = {
  ...process.env,
  PORT: process.env.PORT ?? "8081",
  BASE_PATH: process.env.BASE_PATH ?? "/__mockup",
};

const pnpm = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const child = spawn(pnpm, ["exec", "vite", "dev"], {
  cwd: sandbox,
  env,
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code ?? 0));
