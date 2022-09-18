import { error } from '@sveltejs/kit';

export async function load(event) {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const guides = await response.json();

	if (!response.ok) {
		throw error(500, 'Could not fetch guides');
	}

	return { guides }
}