import type RecipeIngredientGroup from "./RecipeIngredientGroup";

interface RecipeObject {
	id: string;
	createdAt: Date;
	title: string;
	desc?: string;
	servings: number;
	cookingTime: number;
	originalRecipe?: string;
	image: string;
	steps: string[];
	ingredientGroups: RecipeIngredientGroup[];
}

export default RecipeObject;
