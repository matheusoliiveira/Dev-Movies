import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // ok se tiver assets estáticos
  build: {
    outDir: 'dist', // padrão que o Render espera
  },
})
