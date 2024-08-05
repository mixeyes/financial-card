// import MillionLint from '@million/lint';
// import million from 'million/compiler';
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import strip from '@rollup/plugin-strip';
import { compression } from 'vite-plugin-compression2';

// needs to analyze chunk structure
// import { analyzer } from 'vite-bundle-analyzer';
import { dependencies } from './package.json';
function renderChunks(deps: Record<string, string>) {
  const chunks = {} as Record<string, any>;
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
// const plugins = [million.vite({ auto: true }), MillionLint.vite(), react(), strip(), compression()];
const plugins = [react(), strip(), compression()];

export default defineConfig({
  build: {
    outDir: './build',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
    sourcemap: false,
  },
  // needs to analyze chunk structure
  // plugins: [react(), strip(), compression(), analyzer()],
  plugins: plugins,
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './src/api'),
      '@app-types': path.resolve(__dirname, './src/types'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  server: {
    port: 3000,
  },
});
