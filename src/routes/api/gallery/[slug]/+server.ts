// src/routes/api/gallery/[slug]/+server.js
import { json } from '@sveltejs/kit';
// @ts-ignore
import fs from 'node:fs/promises';
import path from 'node:path';

export async function GET({ params }) {
	const { slug } = params;
	const galleryPath = path.join(process.cwd(), 'static', 'media', 'images', 'galleries', slug);

	try {
		const files = await fs.readdir(galleryPath);
		const imageFiles = files.filter((file: any) => /\.(jpg|png|gif|svg|webp)$/i.test(file));
		const imageUrls = imageFiles.map((file: any) => `/media/images/galleries/${slug}/${file}`);

		return json(imageUrls);
	} catch (error) {
		console.error('Error reading gallery directory:', error);
		return json({ error: 'Failed to load gallery images' }, { status: 500 });
	}
}
