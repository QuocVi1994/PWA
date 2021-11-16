import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        sourcemap: false,
        cleanupOutdatedCaches: false  
      },
      manifest: {
        name: '粤康码',
        short_name: '粤康码',
        description: '粤康码 Off-Line',
        theme_color: '#ffffff',
        display: 'fullscreen'
      }
    })
  ],
  base: '/PWA/dist/'
})
