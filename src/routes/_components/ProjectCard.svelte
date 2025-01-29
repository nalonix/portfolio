<script lang="ts">
	// Please fix type issue
	import type { Project } from '$lib/types';
	import { Heart } from 'phosphor-svelte';

	import { fade } from 'svelte/transition';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();

	console.log('This is Project Card');

	function handleLike() {
		console.log('Like Project', project?.slug);
	}
</script>

<div class="relative card" transition:fade={{ duration: 200 }}>
	<button
		onclick={handleLike}
		class="flex w-fit p-1 absolute right-3 top-3 rounded-full bg-black/90 backdrop-blur-sm invert z-30"
	>
		<Heart size={18} color="white" />
	</button>
	<a href={`/projects/${project.slug}`}>
		<div class="relative">
			<img src={project.banner} alt="" class="rounded-3xl" />
			<span class="block absolute bottom-2 left-4 px-2 rounded-full text-xs bg-white"
				>{project.date}</span
			>
		</div>
		<div class="px-3.5 py-2">
			<h3 class="font-bold capitalize my-1">{project.title}</h3>
			<p>{project.description}</p>
			<div class="my-2 flex flex-wrap gap-2">
				{#each project.tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		</div>
	</a>
</div>
