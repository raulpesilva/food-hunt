import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import svgRPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgRPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
