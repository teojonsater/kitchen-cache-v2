import type MeasurementUnit from "../../../utils/measurements/MeasurementUnit";

interface RecipeForm {
	formName: string;
	formOriginalRecipe: string;
	formDesc: string;
	formServings: number;
	formCookingTime: number;
	formImage: File;
	formSteps: Array<{ formStep: string }>;
	formIngredients: Array<{
		formIngredientAmount?: number;
		formIngredientMeasurement: MeasurementUnit;
		formIngredientName: string;
	}>;
	formIngredientGroups: Array<{
		formIngredientGroupName: string;
		formIngredientGroupIngredients: Array<{
			formIngredientAmount?: number;
			formIngredientMeasurement: MeasurementUnit;
			formIngredientName: string;
		}>;
	}>;
}

export default RecipeForm;
