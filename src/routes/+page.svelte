<script lang="ts">
    // 
    import * as config from '$lib/config'
    // 
	import HeroSection from './_components/HeroSection.svelte';
    import ProjectsSection from "./_components/ProjectsSection.svelte";
    
    export let data;
</script>



<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section>
    <HeroSection />
    <ProjectsSection projects={data.projects} />
</section>