<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.status}</h1>
<h2>Looks like we got an ERROR</h2>

<button><a href="/">Back to the Light</a></button>

<style>
	h1,
	h2 {
		font-family: var(--LinuxLibertine);
		font-size: var(--fz-l);

		color: #ea5555;
	}

	h1 {
		font-size: calc(var(--fz-xl) * 2);
	}

	button {
		background: #2bab56;
		color: #262626;
	}
</style>
