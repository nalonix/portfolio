<script lang="ts">
	import ProjectCard from "./ProjectCard.svelte";

    export let projects;
</script>

<section>
    Project Section
    {#each projects as project (project.slug) }
        <ProjectCard {project} />
    {/each} 
</section>

