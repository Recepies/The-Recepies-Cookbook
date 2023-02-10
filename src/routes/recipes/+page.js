export const load = ({ fetch }) => {
	const fetchRecipes = async () => {
		const res = await fetch('/api/recipes');
		const data = await res.json();

		return data;
	};

	return {
		recipes: fetchRecipes()
	};
};
