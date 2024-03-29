import type RecipeIngredientGroup from "./RecipeIngredientGroup";

interface RecipeObject {
	id: string;
	createdAt: Date;
	name: string;
	desc?: string;
	costPerServing: number;
	servings: number;
	cookingTime: number;
	originalRecipe?: string;
	image: string;
	steps: string[];
	ingredientGroups: RecipeIngredientGroup[];
}

export default RecipeObject;
