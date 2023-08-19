import type RecipeIngredient from "./RecipeIngredient";

interface RecipeIngredientGroup {
	title: string;
	ingredients: RecipeIngredient[];
}

export default RecipeIngredientGroup;
