interface RecipeForm {
	formName: string;
	formOriginalRecipe: string;
	formDesc: string;
	formServings: number;
	formCookingTime: number;
	formImage: File;
	formSteps: Array<{ formStep: string }>;
	formIngredientGroups: Array<{
		formIngredientGroupName?: string;
		formIngredientGroupIngredients: Array<{
			formIngredientAmount?: number;
			formIngredientMeasurement:
				| "-"
				| "st"
				| "förp"
				| "port"
				| "kg"
				| "hg"
				| "g"
				| "mg"
				| "l"
				| "dl"
				| "cl"
				| "ml"
				| "msk"
				| "tsk"
				| "krm"
				| "cup"
				| "floz"
				| "oz";
			formIngredientName: string;
		}>;
	}>;
}

export default RecipeForm;
