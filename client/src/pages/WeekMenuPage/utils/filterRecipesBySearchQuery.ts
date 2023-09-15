import type RecipeObject from "../../../interfaces/recipe/RecipeObject";
import cleanString from "../../../utils/cleanString";

function filterRecipesBySearchQuery(
	allRecipes: RecipeObject[],
	searchQuery: string,
) {
	return allRecipes.filter((recipe) =>
		cleanString(recipe.name.toLowerCase()).includes(
			cleanString(searchQuery.toLowerCase()),
		),
	);
}

export default filterRecipesBySearchQuery;
