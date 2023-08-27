import type RecipeObject from "../../../interfaces/recipe/RecipeObject";
import recipeContainsAnyIngredient from "./recipeContainsAnyIngredient";
import recipeContainsEveryIngredient from "./recipeContainsEveryIngredient";

function filterRecipes(
	allRecipes: RecipeObject[],
	searchQuery: string,
	filteredIngredients: string[],
	ingredientFilterSwitch: boolean,
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
				/*recipeContainsEveryIngredient(recipe, filteredIngredients),*/
				(ingredientFilterSwitch
					? !recipeContainsAnyIngredient(recipe, filteredIngredients)
					: recipeContainsEveryIngredient(
							recipe,
							filteredIngredients,
					  )),
		);
	}
}

export default filterRecipes;
