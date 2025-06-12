import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "src/index.js",
  outDir: "dist",
  format: "esm",
  bundle: true,
  noExternal: ['es-toolkit', 'es-toolkit/compat']
});
