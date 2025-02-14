<script lang="ts">
	import WatermarkBackground from './WatermarkBackground.svelte';

	import File from 'phosphor-svelte/lib/File';
</script>

<section class="flex flex-col gap-5 items-center justify-center p-7 h-[50%] min-h-[400px]">
	<!-- <div class="h-full w-full bg-white">
		<div
			class="absolute h-full w-[90%] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-40 -translate-y-80"
		></div>
	</div> -->
	<WatermarkBackground />
	<div class="flex flex-col items-center">
		<h2 class="text-4xl">Hello, I'm</h2>
		<h1 class="text-5xl sm:text-8xl font-bold text-center">Naol Fekadu</h1>
	</div>
	<div>
		<!-- <p class="text-center max-w-2xl xl:max-w-3xl">pouring heart and soul into crafting software solutions, reveling in the art of methodical engineering to build exceptional software</p> -->
		<p class="text-center max-w-2xl xl:max-w-3xl">
			In love with and intrigued by the universe of softwares.
			<!-- In love with excellent craftsmanship. -->
		</p>
	</div>
	<div>
		<a href="/docs/resume.pdf" class="primary-button gap-1 uppercase text-sm">
			Resume <File size={18} />
		</a>
	</div>
</section>
