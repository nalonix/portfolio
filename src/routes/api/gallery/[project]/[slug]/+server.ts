// src/routes/api/gallery/[article]/[slug]/+server.ts

import { json } from '@sveltejs/kit';
import { galleryManifest } from '$lib/imageManifest'; // Import the build-time manifest

interface Params {
    slug: string;
    project: string;
}

export async function GET({ params }: { params: Params }) {
    const { slug, project } = params;

    // Retrieve images from the pre-generated manifest
    if (galleryManifest[project] && galleryManifest[project][slug]) {
        const imageUrls = galleryManifest[project][slug];
        return json(imageUrls);
    } else {
        // Return 404 if the specific gallery is not found
        return json({ error: 'Gallery not found or no images defined' }, { status: 404 });
    }
}