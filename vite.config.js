import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'http://localhost:8000',
  server: {
    proxy: {
        '/api': {
            target: 'http://localhost:8000', // Your backend server URL
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''), // Adjust path if necessary
        },
    },
},
})
