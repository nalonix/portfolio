<script lang="ts">
    import { SOCIALS } from "$lib/constants";
</script>


<section class="flex flex-col justify-end bg-gradient-to-b from-gray-50/20 via-gray-300/90 to-gray-400/80 h-64">  
    <div class="flex items-center justify-center gap-2 px-2 py-2">
        {#each SOCIALS as social}
        <a href={social.href} target="_blank" class="bg-zinc-900 hover:invert transition-all duration-200 rounded-full p-1.5 gap-1 uppercase text-sm">
            <svelte:component this={social.icon} size={24} weight="light" color="white" />
        </a>
        {/each}
    </div>
    <div class="max-w-7xl mx-auto p-4">
        <p class="font-bold text-sm text-center">For King & Country</p>
    </div>
</section>