<script>
	import { page } from '$app/stores';
	import './styles.css';
</script>

<section>
	<h1>{$page.status}</h1>
	<h2>Looks like we got an ERROR</h2>

	<a href="/">Back to the Light</a>
</section>

<style>
	section {
		margin-block: var(--space-m);
	}
</style>
