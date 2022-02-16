import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'

const rootPath = path.resolve(__dirname, '..')
export default defineConfig({
  root: rootPath,
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, '../src')}/`
    }
  },
  plugins: [
    Vue({
      include: [/\.vue$/]
    })
  ]
})
