<svelte:head><title>Recepies - Quick and Easy Food Recipes</title>
<meta name="google-site-verification" content="ZcIo3v7EMp7-MhgoUS3MgWmGF3x0Qa8H2riYZBLNCSE" />
</svelte:head>

<header>
	<div class="blob-a" />
	<div class="blob-b" />
	<h1>Quick and easy recepies for you to enjoy munching on</h1>
	<button><a href="/recipes">View Recepies</a></button>
</header>

<figure><img src="/p1.png" alt="" /></figure>

<style>
	.blob-a {
		z-index: -1;
		position: fixed;
		width: calc(var(--space-2xl) * 4);
		aspect-ratio: 1/1;
		left: 33px;
		top: 15px;

		background: radial-gradient(52.65% 52.65% at 51.5% 47.35%, #a6a5ff 0%, #bdff00 100%);

		mix-blend-mode: hard-light;
		filter: blur(75px);
		border-radius: 980px;
	}

	.blob-b {
		z-index: -1;
		position: fixed;
		width: calc(var(--space-2xl) * 4);
		aspect-ratio: 2/1;
		left: 238px;
		top: 77px;

		background: radial-gradient(52.65% 52.65% at 51.5% 47.35%, #fb6627 0%, #ffb800 100%);
		mix-blend-mode: hard-light;
		opacity: 0.8;
		filter: blur(75px);
		border-radius: 980px;
	}

	img {
		border-radius: 100%;
		aspect-ratio: 1/1;
		object-fit: cover;
		position: absolute;
		width: calc(var(--space-2xl) * 4);
		right: var(--space-xs);
	}
</style>
