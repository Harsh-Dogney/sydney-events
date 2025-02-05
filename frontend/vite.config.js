import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.js', // Treat .js files as JSX
    }),
  ],
  server: {
    port: 5173,
  },
  define: {
    'process.env': {}, // Define an empty process.env object
  },
});
