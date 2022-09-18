import { error, json } from '@sveltejs/kit';

export async function load({ fetch }) {
	try {
		const response = await fetch('/guides.json');
		const guides = await response.json();
		return { guides };
	} catch (error) {
		console.log('error', error);
		throw error(500, 'Could not fetch guides');
	}
}
