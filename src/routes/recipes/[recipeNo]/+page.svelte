<script>
	export let data;

	console.log(data);

	const recipe = data.recipes;
</script>

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

<style>
	h2 {
		margin-block: var(--space-xs) var(--space-2xs);
	}

	figure {
		margin-bottom: var(--space-m);

		width: 100%;
	}

	img {
		width: 100%;
		max-height: 60vh;
		object-fit: cover;
	}

	article {
		margin-bottom: var(--space-l);
	}
</style>
