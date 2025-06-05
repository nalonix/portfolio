import { json } from '@sveltejs/kit';
import fs from 'node:fs/promises';
import path from 'node:path';

interface Params {
    slug: string;
    project: string;
}

export async function GET({ params }: { params: Params }) {
    const { slug, project } = params;
    const galleryPath = path.join(process.cwd(), 'static', project, 'media', 'images', 'gallery', slug);

    try {
        const files = await fs.readdir(galleryPath);
        const imageFiles = files.filter((file) => /\.(jpg|png|gif|svg|webp)$/i.test(file));
        const imageUrls = imageFiles.map((file) => `/${project}/media/images/gallery/${slug}/${file}`);

        return json(imageUrls);
    } catch (error) {
        console.error('Error reading gallery directory:', error);
        return json({ error: 'Failed to load gallery images' }, { status: 500 });
    }
} 