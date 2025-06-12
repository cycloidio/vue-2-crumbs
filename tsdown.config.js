import { defineConfig } from "tsdown";
import Vue from 'unplugin-vue/rolldown'

export default defineConfig({
  entry: "src/index.js",
  outDir: "dist",
  format: "esm",
  bundle: true,
  plugins: [Vue({ isProduction: true })],
  noExternal: ['es-toolkit', 'es-toolkit/compat']
});
