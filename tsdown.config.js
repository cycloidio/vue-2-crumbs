import { defineConfig } from "tsdown";
import Vue from 'unplugin-vue2/rollup'

export default defineConfig({
  entry: "src/index.js",
  outDir: "dist",
  format: "esm",
  bundle: true,
  plugins: [Vue({ isProduction: true })],
  external: ['vue'],
  noExternal: ['es-toolkit', 'es-toolkit/compat']
});
