<script>
	export let data;

	console.log(data);

	const recipe = data.recipes;
</script>

<svelte:head><title>Recepies - {recipe.title}</title></svelte:head>

<main>
	{#if recipe.cover}
		<figure><img src="/recipes/{recipe.cover}" alt /></figure>
	{/if}

	<h1>{recipe.title}</h1>
	<article>
		<h2>About this Recipe</h2>
		<p>{recipe.desc}</p>
		<br />
		<p>Time Required: {recipe.time} min</p>
		<p>Category: {recipe.cat}</p>
	</article>

	<article>
		<h2>Ingredients</h2>
		<ul>
			{#each recipe.ingredients as item}
				<li>{item}</li>
			{/each}
		</ul>
	</article>

	<article>
		<h2>Procedure</h2>
		<ol>
			{#each recipe.procedure as step}
				<li>{step}</li>
			{/each}
		</ol>
	</article>
</main>

<footer>
	<h2>Contact</h2>
	<p>recepies.work@gmail.com</p>
</footer>

<style>
	h2 {
		margin-block: var(--space-xs) var(--space-2xs);
	}

	figure {
		margin-block: var(--space-m);

		width: 100%;
	}

	img {
		width: 100%;
		max-height: 60vh;
		object-fit: cover;
		border-radius: var(--space-xs);
	}

	article {
		margin-bottom: var(--space-l);
	}

	footer {
		width: calc(100% - var(--space-s) * 2);
		background: var(--clr-grey);
		color: var(--clr-white);
		bottom: 0;
		padding: var(--space-s);
		margin-block: var(--space-s);
		border-radius: var(--space-xs);
	}
</style>
