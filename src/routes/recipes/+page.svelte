<script>
	export let data;

	let searchedTerm = '';

	console.log();

	$: filteredrecipes = data.recipes.filter((recipe) => {
		return recipe.title.toLowerCase().includes(searchedTerm.toLowerCase());
	});

	const resetsearch = () => {
		console.log('search was reset');

		searchedTerm = '';
	};

	$: console.log(filteredrecipes);
</script>

<svelte:head><title>Recepies - Quick and Easy Food Recipes</title></svelte:head>

<main>
	<h1>Recipe Catalog</h1>
	<input type="text" bind:value={searchedTerm} placeholder="Search" />

	<section>
		{#if filteredrecipes.lenght == 0}
			<p class="alert">No Results Found, Please try to Seach Something Else.</p>
		{:else}
			{#each filteredrecipes as item}
				<article class="card">
					<figure class="card__fig">
						<img src="/recipes/{item.cover}" alt={item.title} class="card__img" />
					</figure>
					<h2 class="card__title">{item.title}</h2>
					<p class="card__info">Time : {item.time} mins</p>
					<p class="card__info">Category : {item.cat}</p>
					<a href="/recipes/{item.id - 1}" class="card__link">Check It Out </a>
				</article>
			{/each}
		{/if}
	</section>
</main>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: var(--space-xs);
		grid-row-gap: var(--space-s);
		grid-column-gap: var(--space-s);
	}

	@media only screen and (max-width: 800px) {
		section {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media only screen and (max-width: 500px) {
		section {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.alert {
		font-family: var(--ff-sans);
		font-weight: normal;
	}
</style>
