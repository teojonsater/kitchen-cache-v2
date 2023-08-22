import type RecipeObject from "../../../interfaces/recipe/RecipeObject";

function recipeContainsAnyIngredient(
	recipe: RecipeObject,
	ingredients: string[],
): boolean {
	for (const recipeGroup of recipe.ingredientGroups) {
		for (const ingredient of recipeGroup.ingredients) {
			if (ingredients.includes(ingredient.name)) {
				return true;
			}
		}
	}

	return false;
}

export default recipeContainsAnyIngredient;
