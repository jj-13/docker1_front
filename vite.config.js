import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Añade esta configuración para que Jest pueda entender JSX
    jsxInject: `import React from 'react'`,
  },
})
