<script lang="ts">
    export let data;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<section>
    mimo
    <div>
        <a href="/">Home</a>
    </div>
    <div>
        <h1>{data.meta.title} </h1>
    </div>
    {JSON.stringify(data)}
    <div class="prose">
        <svelte:component this={data.content}></svelte:component>

    </div>

</section>