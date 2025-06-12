import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      'vue-2-crumbs': resolve('../../dist/')
    }
  }
})
