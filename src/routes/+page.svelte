<script lang="ts">
    // 
    import * as config from '$lib/config'
    // 
	import Hero from './_components/Hero.svelte';
	import Footer from './_components/Footer.svelte';
    import ProjectsSection from "./_components/ProjectsSection.svelte";
    
    export let data;
</script>



<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section>
    <Hero />
    <ProjectsSection projects={data.projects} />
    <Footer />
</section>