<script>
	export let data;
	console.log(data.recipes);

	const filteredrecipes = [data.recipes[0], data.recipes[1]];
</script>

<svelte:head
	><title>Recepies - Quick and Easy Food Recipes</title>
	<meta name="google-site-verification" content="ZcIo3v7EMp7-MhgoUS3MgWmGF3x0Qa8H2riYZBLNCSE" />
</svelte:head>

<header class="hero">
	<figure class="hero-bg">
		<img src="./cover.png" alt="cover" />
	</figure>
	<div class="container">
		<h1 class="hero__title">Mouth Watering and Healthy Recipes for you to enjoy</h1>
		<a href="/recipes">View Recipes</a>
	</div>
</header>
<main>
	<section class="about">
		<article>
			<h2>Authentic Indian Taste</h2>
			<p>
				Our Recipes offer the delightful taste of the Indian Cuisine. Most recipes include the
				tempting flavours of Indian spices such as Turmeric and Cumin.
			</p>
		</article>
		<article>
			<h2>Health First</h2>
			<p>
				Most of the recipes include vegetables rich in vitamins and dietry fibre and spices rich in
				antioxidants. The recipes are even optimised to be cooked in less oil.
			</p>
		</article>
		<article>
			<h2>Quick and Easy</h2>
			<p>
				The list of recipes is curated from what people generally eat. It is not something fancy and
				is easily doable at home with only a little bit of work. Most Ingredients should also be
				available at your local grocery store.
			</p>
		</article>
	</section>

	<h2 class="recipes__title">Top Picks</h2>
	<section class="recipes">
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
	</section>
	<a href="/recipes">View All Recipes</a>
</main>

<style>
	.recipes__title {
		color: hsl(var(--clr-saffron));
		font-size: var(--fz-title);
	}

	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		position: relative;
		top: calc(var(--space-2xl) * -1);
	}

	.hero-bg {
		position: absolute;
		z-index: -5;
		width: 100%;
		height: 100%;
	}

	.hero-bg img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.25;
	}

	.hero .container {
		padding: 0 var(--space-xs);
		max-width: 80rem;
	}

	.about {
		margin-left: auto;
		margin-right: auto;
		max-width: 80rem;
	}

	.about > article {
		max-width: clamp(25rem, 14.2857rem + 34.2857vw, 40rem);
		margin-block: var(--space-m);
		position: relative;
	}

	.about > article::before {
		content: '';
		position: absolute;
		top: calc(var(--space-2xl) * -0.5);
		left: calc(var(--space-2xl) * -0.5);
		width: calc(var(--space-2xl) * 2);
		aspect-ratio: 1/1;
		background: radial-gradient(
			circle,
			hsl(var(--clr-saffron)) 0%,
			hsla(var(--clr-saffron), 0) 100%
		);
		z-index: -1;
		opacity: 0.7;
		filter: blur(30px);
	}
	.about > article:nth-child(even):before {
		background: radial-gradient(circle, hsl(var(--clr-green)) 0%, hsla(var(--clr-green), 0) 100%);
	}

	.about > article:nth-child(odd) {
		margin-left: auto;
	}

	.about > article:nth-child(odd) h2 {
		color: hsl(var(--clr-saffron));
	}

	.about > article:nth-child(even) h2 {
		color: hsl(var(--clr-green));
	}

	.recipes {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: var(--space-xs);
		grid-row-gap: var(--space-s);
		grid-column-gap: var(--space-s);

		margin-bottom: var(--space-s);
	}

	@media only screen and (max-width: 800px) {
		.recipes {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media only screen and (max-width: 500px) {
		.recipes {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
