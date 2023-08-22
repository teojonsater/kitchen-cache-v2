import type RecipeObject from "../../../interfaces/recipe/RecipeObject";
import recipeContainsEveryIngredient from "./recipeContainsEveryIngredient";

function filterRecipes(
	allRecipes: RecipeObject[],
	searchQuery: string,
	filteredIngredients: string[],
) {
	if (filteredIngredients.length === 0) {
		// Return all recipes if no ingredients are filtered
		return allRecipes.filter((recipe) =>
			recipe.name.toLowerCase().includes(searchQuery.toLowerCase()),
		);
	} else {
		// Return recipes matching both name and ingredient criteria
		return allRecipes.filter(
			(recipe) =>
				recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
				recipeContainsEveryIngredient(recipe, filteredIngredients),
		);
	}
}

export default filterRecipes;
