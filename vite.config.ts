import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    // 설치형 앱(PWA): 모든 빌드 산출물을 미리 저장해 오프라인에서도 열리고, 새 배포는 자동으로 받는다.
    VitePWA({
      registerType: 'autoUpdate',
      pwaAssets: { config: true, overrideManifestIcons: true },
      manifest: {
        name: 'LRC Tap — Lyrics Sync Editor',
        short_name: 'LRC Tap',
        description:
          'Sync lyrics to audio and export .lrc files. Everything runs in your browser; nothing is uploaded.',
        theme_color: '#0b0f19',
        background_color: '#0b0f19',
        display: 'standalone',
        start_url: './',
        scope: './',
      },
      workbox: { globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'] },
    }),
  ],
  server: { port: 3100, strictPort: true },
  preview: { port: 3101, strictPort: true },
})
