<script>
	import './styles.css';
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>

		<li class="logo"><a href="/recipes"><img src="./logo.svg" alt="logo" /></a></li>
	</ul>
</nav>

<div class="gap" />
<slot />

<footer>
	<h2>Contact</h2>
	<h3>recepies.work@gmail.com</h3>
</footer>

<style>
	nav {
		position: absolute;
		width: 100%;
		z-index: 10;
		padding: var(--space-xs);
		top: 0;
	}

	ul {
		display: flex;
		align-items: center;
	}

	li:not(:last-child) {
		width: 100%;
	}

	.logo img {
		height: calc(var(--fz-title) * 1.5);
	}

	.gap {
		margin-top: var(--space-2xl);
	}

	footer {
		background: hsl(var(--clr-saffron));
		color: hsl(var(--clr-text-wh));
		padding: var(--space-s);
	}

	footer h2 {
		font-weight: bolder;
	}

	footer h3 {
		font-weight: normal;
	}
</style>
