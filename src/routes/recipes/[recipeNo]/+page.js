export const load = ({ fetch, params }) => {
	const fetchRecipes = async () => {
		const res = await fetch('/api/recipes');
		const data = await res.json();

		return data[params.recipeNo];
	};

	return {
		recipes: fetchRecipes()
	};
};
