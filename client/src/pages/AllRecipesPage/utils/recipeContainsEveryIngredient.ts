import type RecipeIngredientGroup from "../../../interfaces/recipe/RecipeIngredientGroup";
import type RecipeObject from "../../../interfaces/recipe/RecipeObject";
import getAllIngredients from "./getAllIngredients";

function recipeContainsEveryIngredient(
	recipe: RecipeObject,
	ingredients: string[],
): boolean {
	const recipeIngredients: string[] = getAllIngredients([recipe]);

	return ingredients.every((ingredient) =>
		recipeIngredients.includes(ingredient),
	);
}

export default recipeContainsEveryIngredient;
