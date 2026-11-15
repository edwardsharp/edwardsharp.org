import { build } from "esbuild";

await build({
  entryPoints: ["src/ts/site.ts"],
  bundle: true,
  format: "esm",
  target: "es2022",
  minify: true,
  outfile: "assets/site.js",
  logLevel: "info",
});
