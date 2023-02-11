<script>
	export let data;

	let searchedTerm = '';

	console.log();

	$: filteredrecipes = data.recipes.filter((recipe) => {
		return (
			recipe.title.toLowerCase().includes(searchedTerm.toLowerCase()) ||
			recipe.cat.includes(searchedTerm.toLowerCase())
		);
	});

	$: console.log(filteredrecipes);
</script>

<svelte:head><title>Recepies - Quick and Easy Food Recipes</title></svelte:head>
<h1>recipes</h1>

<input type="text" bind:value={searchedTerm} placeholder="Search" />

<section class="card-holder">
	{#each filteredrecipes as item}
		<article class="card">
			<h2 class="card__title">{item.title}</h2>
			<p class="card__time">{item.time} min</p>
			<p class="card__cat">{item.cat}</p>

			<button><a href="/recipes/{item.id - 1}">View Recipe</a></button>
		</article>
	{/each}
</section>

<footer>
	<h2>Contact</h2>
	<p>recepies.work@gmail.com</p>
</footer>

<style>
	h1,
	h2 {
		margin-block: var(--space-xs) var(--space-2xs);
	}

	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: var(--space-xs);
		grid-row-gap: var(--space-s);
	}

	@media only screen and (max-width: 800px) {
		section {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	article {
		background: var(--clr-black);
		color: var(--clr-white);
		padding: var(--space-xs);
		border-radius: var(--space-2xs);
	}

	button {
		color: var(--clr-white);
		background: var(--clr-grey);
	}

	footer {
		position: fixed;
		width: calc(100% - var(--space-s) * 2);
		background: var(--clr-black);
		color: var(--clr-white);
		bottom: 0;
		padding: var(--space-s);
		margin-block: var(--space-s);
		border-radius: var(--space-xs);
	}
</style>
