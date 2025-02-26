<script lang="ts">
	import { onMount } from 'svelte';
	//
	import * as config from '$lib/config';
	import { loglib } from '@loglib/tracker';
	//
	import Header from './_components/Header.svelte';
	import Hero from './_components/Hero.svelte';
	import Footer from './_components/Footer.svelte';
	import ProjectsSection from './_components/ProjectsSection.svelte';

	interface Props {
		data: any;
	}

	onMount(() => {
		// Loglib analytics
		loglib.record({
			id: 'nalonix'
		});
	});

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<Hero />
	<ProjectsSection projects={data.projects} />
</section>
