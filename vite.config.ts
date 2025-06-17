import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // ✅ use only this if Lovable used it
import path from 'path';
import { componentTagger } from 'lovable-tagger';

export default defineConfig(({ mode }) => ({
  base: '/groove-mint-vault/', // 👈 required for GitHub Pages

  server: {
    host: '::',
    port: 8080,
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
