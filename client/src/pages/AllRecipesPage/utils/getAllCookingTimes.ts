import type RecipeObject from "../../../interfaces/recipe/RecipeObject";

function getAllCookingTimes(recipes: RecipeObject[]): number[] {
	const allCookingTimes: number[] = [];

	recipes.forEach((recipe) => {
		if (!allCookingTimes.includes(recipe.cookingTime)) {
			allCookingTimes.push(recipe.cookingTime);
		}
	});

	allCookingTimes.sort((n1, n2) => n1 - n2);

	return allCookingTimes;
}

export default getAllCookingTimes;
