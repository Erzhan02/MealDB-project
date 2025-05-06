import react from '@vitejs/plugin-react';
import path from 'path';

import { defineConfig } from 'vite';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@app': path.resolve(__dirname, 'src/app'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@icons': path.resolve(__dirname, 'icons'),
			'@images': path.resolve(__dirname, 'images'),
		},
	},
});
