import type RecipeIngredient from "./RecipeIngredient";

interface RecipeIngredientGroup {
	name?: string;
	ingredients: RecipeIngredient[];
}

export default RecipeIngredientGroup;
