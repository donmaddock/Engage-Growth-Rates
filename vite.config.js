import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://donmaddock.github.io/Engage-Growth-Rates/',
  plugins: [react()],
})
