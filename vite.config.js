// vite.config.js
import { defineConfig } from 'vite'
// ... other imports

export default defineConfig({
  plugins: [/* ... your plugins */],
  server: {
    host: true // This binds the server to 0.0.0.0
  }
})