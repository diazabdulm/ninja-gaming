import { redirect } from '@sveltejs/kit';

export async function load({ params: { id } }) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const guide = await response.json();

	if (!response.ok) {
		throw redirect(301, '/guides');
	}

	return { guide };
}