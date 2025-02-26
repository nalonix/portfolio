import type { Project } from '$lib/types';

import { loglib } from '@loglib/tracker';

export async function load({ fetch }) {
	const response = await fetch('api/projects');
	const projects: Project[] = await response.json();

	loglib.record({
		id: 'nalonix'
	});

	return {
		projects
	};
}
