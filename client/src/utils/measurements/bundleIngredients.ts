import type RecipeIngredient from "../../interfaces/recipe/RecipeIngredient";
import type WeekMenuDay from "../../interfaces/weekmenu/WeekMenuDay";
import MeasurementUnit from "./MeasurementUnit";
import convertMeasurement from "./convertMeasurement";
import getMeasurementCategory from "./getMeasurementCategory";

//TODO: Make work with page

function bundleIngredients(weekMenuDays: WeekMenuDay[]): RecipeIngredient[] {
	const ingredientArray: RecipeIngredient[] = [];

	weekMenuDays.forEach((weekMenuDay) => {
		weekMenuDay.menuRecipes.forEach((menuRecipe) => {
			menuRecipe.recipe.ingredientGroups.forEach((ingredientGroup) => {
				ingredientGroup.ingredients.forEach((ingredient) => {
					const existingIngredientIndex = ingredientArray.findIndex(
						(existingIngredient) =>
							existingIngredient.name === ingredient.name &&
							getMeasurementCategory(
								existingIngredient.measurement,
							) ===
								getMeasurementCategory(ingredient.measurement),
					);

					if (existingIngredientIndex !== -1) {
						// If the ingredient already exists in the array, add the amount
						ingredientArray[existingIngredientIndex].amount +=
							convertMeasurement(
								ingredient.amount,
								ingredient.measurement,
								ingredientArray[existingIngredientIndex]
									.measurement,
							);
					} else {
						// If the ingredient doesn't exist in the array, push it
						const measurementCategory = getMeasurementCategory(
							ingredient.measurement,
						);

						let convertedIngredient = { ...ingredient };

						if (measurementCategory == "volumeMeasurements") {
							convertedIngredient.amount = convertMeasurement(
								ingredient.amount,
								ingredient.measurement,
								MeasurementUnit.ML,
							);
							convertedIngredient.measurement =
								MeasurementUnit.ML;
						} else if (
							measurementCategory == "weightMeasurements"
						) {
							convertedIngredient.amount = convertMeasurement(
								ingredient.amount,
								ingredient.measurement,
								MeasurementUnit.MG,
							);
							convertedIngredient.measurement =
								MeasurementUnit.MG;
						} else if (measurementCategory == "otherMeasurements") {
							convertedIngredient.amount = convertMeasurement(
								ingredient.amount,
								ingredient.measurement,
								ingredient.measurement,
							);
						}

						ingredientArray.push({ ...convertedIngredient });
					}
				});
			});
		});
	});

	return ingredientArray;
}

export default bundleIngredients;
