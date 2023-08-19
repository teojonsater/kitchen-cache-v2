import type RecipeIngredientGroup from "./RecipeIngredientGroup";

interface RecipeObject {
	id: string;
	createdAt: string;
	title: string;
	desc: string;
	servings: number;
	cookingTime: number;
	originalRecipe: string;
	image: string;
	steps: string[];
	ingredients: RecipeIngredientGroup[];
}

export default RecipeObject;
