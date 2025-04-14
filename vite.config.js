import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Khadi-Threads-React/', // 👈 add your repo name here
  plugins: [
    react(),
    tailwindcss(),
  ],
})
