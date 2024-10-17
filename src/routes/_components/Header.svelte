
<script lang="ts">
    import { SOCIALS } from "$lib/constants";
</script>
<section class="max-w-7xl mx-auto flex justify-between items-center py-5 px-3">
    <div>
    </div>
    <div class="flex gap-2">
        {#each SOCIALS as social}
            <a href={social.href} target="_blank" class="hover:bg-zinc-200 rounded-full p-1.5 gap-1 uppercase text-sm">
                <svelte:component this={social.icon} size={24} weight="light" />
            </a>
        {/each}
    </div>
</section>