<script lang="ts">
    import { onMount } from "svelte";
    import { fade, scale } from "svelte/transition";
    import ProjectCard from "./ProjectCard.svelte";
    import type { Project } from "$lib/types";

    export let projects: Project[];

    const FILTER_TAGS = [
        "ALL", "SVELTEKIT", "CSS", "WEB", "TELEGRAM", "OPEN SOURCE", 
        "BACKEND", "SCRIPTS", "BOTS", "DESKTOP", "AI / ML"
    ];

    let filteredProjects: Project[] = [];
    let selectedFilter = "ALL";

    // Initialize filtered projects on mount
    onMount(() => {
        filteredProjects = projects;
    });

    // filtering projects based on selected tag
    $:{ 
        filteredProjects = selectedFilter === "ALL"
        ? projects
        : projects.filter(project => project.tags.includes(selectedFilter));
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
                class={`tag ${selectedFilter === tag ? 'active' : ''}`}
                on:click={() => selectedFilter = tag}
            >
                {tag}
            </button>
        {/each}
    </div>
    
    <div class="min-h-[600px] grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 pb-20 pt-8">
        {#each filteredProjects as project (project.slug)}
            <div transition:fade|scale={{ duration: 300 }}>
                <ProjectCard {project} />
            </div>
        {/each}
    </div>
</section>

<style>
    .tag.active {
        font-weight: bold;
        border-bottom: 2px solid black;
    }
</style>
