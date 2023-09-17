import type MeasurementUnit from "../../utils/measurements/MeasurementUnit";

interface RecipeIngredient {
	name: string;
	amount: number;
	measurement: MeasurementUnit;
}

export default RecipeIngredient;
