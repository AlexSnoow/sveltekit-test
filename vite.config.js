// файл vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import postcss from 'postcss';
import json from '@rollup/plugin-json';

export default defineConfig({
	plugins: [
		sveltekit(),
		json()],
	css: {
		postcss
	},
	build: {
		rollupOptions: {
			input: {
				// укажите путь к вашему основному файлу js
				main: './static/assets/js/main.js',
			},
			output: {
				// настройте выходной файл
				entryFileNames: 'assets/js/[name].js',
				chunkFileNames: 'assets/js/[name].js',
				assetFileNames: 'assets/js/[name].[ext]',
			},
		},
	}
});
