import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import svgr from 'vite-plugin-svgr' 
import dynamicImport from 'vite-plugin-dynamic-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dynamicImport(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  assetsInclude: ['**/*.svg'],
})