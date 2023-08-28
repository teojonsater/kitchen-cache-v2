import type RecipeObject from "../../../interfaces/recipe/RecipeObject";
import recipeContainsAnyIngredient from "./recipeContainsAnyIngredient";
import recipeContainsEveryIngredient from "./recipeContainsEveryIngredient";

function filterRecipes(
	allRecipes: RecipeObject[],
	searchQuery: string,
	filteredIngredients: string[],
	ingredientFilterSwitch: boolean,
	filterCookingTimeValues: [number, number],
) {
	if (filteredIngredients.length === 0) {
		// Return all recipes if no ingredients are filtered
		return allRecipes.filter(
			(recipe) =>
				recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
				recipe.cookingTime >= filterCookingTimeValues[0] &&
				recipe.cookingTime <= filterCookingTimeValues[1],
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
					  )) &&
				recipe.cookingTime >= filterCookingTimeValues[0] &&
				recipe.cookingTime <= filterCookingTimeValues[1],
		);
	}
}

export default filterRecipes;
