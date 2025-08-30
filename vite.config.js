import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: './', // raiz do projeto onde está o index.html
  publicDir: 'public', // se você tiver arquivos estáticos nessa pasta
  build: {
    outDir: 'dist', // pasta de saída do build
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // garante que o index.html seja lido corretamente
    },
  },
})
