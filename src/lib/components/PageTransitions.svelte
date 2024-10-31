<!-- <script lang="ts">
	import { fly } from "svelte/transition";

    /** @type {{children?: import('svelte').Snippet}} */
	let { key, duration, delay, children } = $props();

    // interface Props {
    //     key: string;
    //     duration: number;
    //     delay: number;
    // }


</script>



{#key key}
    <section 
    class="h-full w-full"
    in:fly={{ y: 100, duration, delay }}
    out:fly={{ y: -100, duration, delay }}
    >
    {key}
        {@render children?.()}
    </section>
{/key} -->