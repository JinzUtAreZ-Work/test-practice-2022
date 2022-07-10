import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({ typescript: true }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
});
