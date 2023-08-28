import type RecipeObject from "../../../interfaces/recipe/RecipeObject";

function getAllCostPerServings(recipes: RecipeObject[]): number[] {
	const allCostPerServings: number[] = [];

	recipes.forEach((recipe) => {
		if (!allCostPerServings.includes(recipe.costPerServing)) {
			allCostPerServings.push(recipe.costPerServing);
		}
	});

	allCostPerServings.sort((n1, n2) => n1 - n2);

	return allCostPerServings;
}

export default getAllCostPerServings;
