import allRecipes from "../../../utils/recipes";

function filterRecipes(searchQuery: string) {
	return allRecipes.filter((recipe) =>
		recipe.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);
}

export default filterRecipes;
