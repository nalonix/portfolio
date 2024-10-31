<script>
	import "../app.css";
	import Footer from "./_components/Footer.svelte";
	import Header from "./_components/Header.svelte";
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>




{@render children?.()}
<Footer />