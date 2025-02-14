import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex";
import rehypeSlug from 'rehype-slug';

import extractHeadings from './src/lib/plugins/extractHeadings.ts';



/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	rehypePlugins: [rehypeSlug],
    remarkPlugins: [extractHeadings],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".md"],
	preprocess: [ vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
};

export default config;
