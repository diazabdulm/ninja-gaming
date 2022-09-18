import { json } from '@sveltejs/kit';

export function GET(params) {
	const guides = [
		{ id: 1, title: 'some title' },
		{ id: 2, title: 'some title 2' },
		{ id: 3, title: 'some title 3' },
		{ id: 4, title: 'some title 4' }
	];

	return json(guides);
}
