import esbuild from "esbuild";
import process from "process";
import builtins from "builtin-modules";

const production = process.argv[2] === "production";
const outfile = process.env.VW_BUILD_OUTFILE || "main.js";
const context = await esbuild.context({
  entryPoints: ["src/main.ts"],
  bundle: true,
  external: ["obsidian", "electron", "@codemirror/*", "@lezer/*", ...builtins],
  format: "cjs",
  target: "es2018",
  loader: { ".png": "dataurl" },
  logLevel: "info",
  minify: production,
  sourcemap: production ? false : "inline",
  treeShaking: true,
  outfile
});

if (production) {
  await context.rebuild();
  await context.dispose();
} else {
  await context.watch();
}
