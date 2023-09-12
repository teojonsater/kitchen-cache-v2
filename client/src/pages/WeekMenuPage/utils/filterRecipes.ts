import type RecipeObject from "../../../interfaces/recipe/RecipeObject";

function filterRecipes(allRecipes: RecipeObject[], searchQuery: string) {
	return allRecipes.filter((recipe) =>
		recipe.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);
}

export default filterRecipes;
