import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/primer-proyecto-React/',
  build: { outDir: 'docs' },
  plugins: [react()],
})
