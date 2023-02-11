<script>
	import './styles.css';
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>

		<li class="logo"><a href="/recipes">Recepies</a></li>
	</ul>
</nav>
<slot />

<style>
	ul {
		display: flex;
		font-size: var(--fz-xs);
	}

	li:not(:last-child) {
		width: 100%;
	}

	.logo {
		font-weight: bold;
	}
</style>
