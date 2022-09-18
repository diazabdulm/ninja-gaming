<script>
	import { page } from '$app/stores';
	import '$lib/global.css';
</script>

<div class="error">
	<h2>Oopsie</h2>
	<p>{$page.error.message}</p>
	<a href="/guides">View all guides</a>
</div>

<style>
	.error {
		text-align: center;
		margin-bottom: 60px;
	}
</style>
