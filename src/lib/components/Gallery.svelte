<script lang="ts">
	import { onMount } from "svelte";

	import BiggerPicture from "bigger-picture";
	import "bigger-picture/css";

	import Info  from "phosphor-svelte/lib/Info";

	export let slug: string;
	export let caption: string;

	let images: any[] = [];
	let galleryImg: HTMLDivElement;

	onMount(async () => {
		try {
			// Load all images from any project media directory
			const allImages = import.meta.glob('/**/media/images/gallery/*.{jpg,png,gif,svg,webp}');

			// Filter images by project name (slug)
			images = Object.keys(allImages).filter(path => path.includes(`/${slug}/media/images/gallery`)).map((path)=> { return {alt: "screenshot", title: "img title", img: path.replace('/static', '')} });

			// initialize BiggerPicture
			let bp = BiggerPicture({
			target: galleryImg,
			});

			// open inline gallery
			bp.open({
			items: images,
			inline: true,
			scale: 1,
			intro: "fadeup",
			noClose: true,
			});
		} catch (err) {
			console.error("Error loading images", err);
		}
	});
</script>


<div class="mt-4 mb-2">
	<div id="inline" bind:this={galleryImg} class="inline-gallery"></div>
	{#if caption}
	<div class="flex flex-row items-center justify-center gap-2 my-1"> 
		<Info size={16} />
		<p class="text-xs opacity-90">{caption}</p>
	</div>
	{/if}
</div>


<style>
	.inline-gallery {
		position: relative;
		background: #222;
		overflow: hidden;
	}
	.inline-gallery:before {
		content: "";
		padding-bottom: 66.66%;
		display: block;
	}
</style>
