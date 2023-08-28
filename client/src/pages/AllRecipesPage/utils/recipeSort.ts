import type RecipeObject from "../../../interfaces/recipe/RecipeObject";
import sortByOptions from "./sortByOptions";

function recipeSort(
	recipes: RecipeObject[],
	sortingMethod: string,
): RecipeObject[] {
	const sortedRecipes = [...recipes];

	switch (sortingMethod) {
		case sortByOptions[0]:
			// Titel: A-Ö
			sortedRecipes.sort((recipeA: RecipeObject, recipeB: RecipeObject) =>
				recipeA.name.localeCompare(recipeB.name),
			);
			break;
		case sortByOptions[1]:
			// Titel: Ö-A
			sortedRecipes.sort((recipeA: RecipeObject, recipeB: RecipeObject) =>
				recipeA.name.localeCompare(recipeB.name),
			);
			sortedRecipes.reverse();
			break;
		case sortByOptions[2]:
			// Tid: Kortast
			sortedRecipes.sort(
				(recipeA: RecipeObject, recipeB: RecipeObject) =>
					recipeA.cookingTime - recipeB.cookingTime,
			);
			break;
		case sortByOptions[3]:
			// Tid: Längst
			sortedRecipes.sort(
				(recipeA: RecipeObject, recipeB: RecipeObject) =>
					recipeB.cookingTime - recipeA.cookingTime,
			);
			break;
		case sortByOptions[4]:
			// Pris: Lägst
			// TODO: Wait until it is in interface for recipeObject
			break;
		case sortByOptions[5]:
			// Pris: Högst
			// TODO: Wait until it is in interface for recipeObject
			break;
	}

	return sortedRecipes;
}

export default recipeSort;
