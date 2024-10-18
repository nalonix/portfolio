<script lang="ts">
    export let data;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<section class="max-w-4xl mx-auto pt-12 px-1.5">
    <div class="relative rounded-t-[2.5rem] overflow-hidden">
        <a class="absolute top-7 left-4 z-40 bg-white hover:bg-black hover:text-white py-1 px-2.5 text-sm rounded-full" href="/">Home</a>
        <!-- Image container -->
        <div class="relative">
            <img src={data.meta.banner} alt="" class="w-full h-auto object-cover">
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-white/40 via-white/95 to-white"></div>
        </div>
    </div>
    <div class="px-4 -translate-y-32 sm:-translate-y-56 md:-translate-y-96  min-h-[50vh]">
        <div class="mb-8">
            <p class="font-extralight text-sm">{data.meta.date}</p>
            <h1 class="font-semibold mt-1 mb-2">{data.meta.title}</h1>
            <div class="flex gap-1">
                {#each data.meta.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </div>
        </div>
        <div class="prose">
            <svelte:component this={data.content} finite="play me"></svelte:component>
        </div>
    </div>
</section>
