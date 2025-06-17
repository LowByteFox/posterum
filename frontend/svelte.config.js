import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
        adapter: adapter(),
        alias: {
            "$components": path.resolve("./src/components"),
        }
    },
};

export default config;
