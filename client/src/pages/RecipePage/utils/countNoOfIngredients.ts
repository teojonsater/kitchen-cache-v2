import type RecipeIngredientGroup from "../../../interfaces/recipe/RecipeIngredientGroup";

function countNoOfIngredients(
	ingredientsGroups: RecipeIngredientGroup[],
): number {
	let uniqueIngredients: string[] = [];

	ingredientsGroups.forEach((recipeGroup) => {
		recipeGroup.ingredients.forEach((ingredient) => {
			if (!uniqueIngredients.includes(ingredient.name)) {
				uniqueIngredients.push(ingredient.name);
			}
		});
	});

	return uniqueIngredients.length;
}

export default countNoOfIngredients;
