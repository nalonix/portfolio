<script lang="ts">
	import ProjectCard from "./ProjectCard.svelte";

    export let projects;

    const FILTER_TAGS = [ "SVELTEKIT", "CSS", "WEB", "TELEGRAM", "OPEN SOURCE", "BACKEND", "SCRIPTS", "BOTS", "DESKTOP", "AI / ML"];

    let filter = ""

    $:{
        
    }
    
</script>

<section class="max-w-7xl mx-auto">
    <div class="flex flex-col items-center gap-2 py-5">
        <h1 class="text-4xl text-center">Projects</h1>
        <p class="font-light">Here are some of my projects</p>
    </div>
    <div class="flex items-center justify-center flex-wrap gap-2 px-2">
        {#each FILTER_TAGS as tag (tag)}
            <button 
            class={`tag ${filter == tag && 'active'}`}
            on:click={()=> filter = tag}
            >{tag}</button>
        {/each}
        
    </div>
    <div class="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 pb-20 pt-8">
        {#each projects as project (project.slug) }
            <ProjectCard {project} />
        {/each} 
    </div>
</section>

