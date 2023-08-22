import type RecipeObject from "../../../interfaces/recipe/RecipeObject";

function getAllIngredients(recipes: RecipeObject[]): string[] {
	const allIngredients: string[] = [];

	recipes.forEach((recipe) => {
		recipe.ingredientGroups.forEach((ingredientGroup) => {
			ingredientGroup.ingredients.forEach((ingredient) => {
				if (!allIngredients.includes(ingredient.name.toLowerCase())) {
					allIngredients.push(ingredient.name.toLowerCase());
				}
			});
		});
	});

	return allIngredients;
}

export default getAllIngredients;
