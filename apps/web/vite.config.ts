import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import Tailwind from 'vite-plugin-tailwind'
import LinkAttributes from 'markdown-it-link-attributes'

const rootPath = path.resolve(__dirname)
export default defineConfig({
  root: rootPath,
  resolve: {
    alias: {
      '@/': `${path.join(rootPath, 'src')}/`
    }
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Pages({
      extensions: ['vue', 'md']
    }),
    Markdown({
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        })
      }
    })
  ]
})
