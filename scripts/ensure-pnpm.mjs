import { unlinkSync } from "node:fs";

const userAgent = process.env.npm_config_user_agent ?? "";
const execPath = process.env.npm_execpath ?? "";
const isPnpm =
  userAgent.startsWith("pnpm/") || execPath.toLowerCase().includes("pnpm");
if (!isPnpm) {
  console.error("Use pnpm instead");
  process.exit(1);
}

for (const lockfile of ["package-lock.json", "yarn.lock"]) {
  try {
    unlinkSync(lockfile);
  } catch {
    // ignore missing files
  }
}
