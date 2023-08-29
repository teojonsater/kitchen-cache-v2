interface RecipeForm {
	formName: string;
	formOriginalRecipe: string;
	formDesc: string;
	formServings: number;
	formCookingTime: number;
	formImage: File;
	// formIngredients TODO: add this
	formSteps: string[];
}

export default RecipeForm;
