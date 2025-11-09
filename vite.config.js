import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'index.html',
          dest: '.', // create 404.html in dist
          rename: '404.html'
        }
      ]
    })
  ],
  base: "/devfest-buildathon-project/",
})
