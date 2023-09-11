import React from "react";
import { Button, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import NameField from "./components/NameField";
import OriginalRecipeField from "./components/OriginalRecipeField";
import DescField from "./components/DescField";
import ServingsField from "./components/ServingsField";
import CookingTimeField from "./components/CookingTimeField";
import ImageField from "./components/ImageField";
import StepFieldsContainer from "./components/StepFieldsContainer";
import { useForm } from "react-hook-form";
import type RecipeForm from "./interfaces/RecipeForm";
import IngredientsContainer from "./components/IngredientsContainer";
import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import { v4 as uuid } from "uuid";
import type RecipeIngredientGroup from "../../interfaces/recipe/RecipeIngredientGroup";
import type RecipeIngredient from "../../interfaces/recipe/RecipeIngredient";

function CreateRecipePage() {
	const defaultFormValues: Partial<RecipeForm> = {
		formServings: 4,
		formCookingTime: 60,
		formSteps: [{ formStep: "" }],
		formIngredients: [
			{
				formIngredientAmount: undefined,
				formIngredientMeasurement: "-",
				formIngredientName: "",
			},
		],
	};

	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		watch,
		setError,
	} = useForm<RecipeForm>({
		defaultValues: defaultFormValues,
	});

	const recipeFormToRecipe = (recipeForm: RecipeForm) => {
		const ingredientGroups: RecipeIngredientGroup[] =
			recipeForm.formIngredientGroups.map(
				(formIngredientGroup): RecipeIngredientGroup => ({
					name: formIngredientGroup.formIngredientGroupName,
					ingredients:
						formIngredientGroup.formIngredientGroupIngredients.map(
							(formIngredient): RecipeIngredient => ({
								name: formIngredient.formIngredientName,
								measurement:
									formIngredient.formIngredientMeasurement,
								amount: isNaN(
									formIngredient.formIngredientAmount ?? 0,
								)
									? 0
									: formIngredient.formIngredientAmount ?? 0,
							}),
						),
				}),
			);

		if (recipeForm.formIngredients.length > 0)
			ingredientGroups.unshift({
				ingredients: recipeForm.formIngredients.map(
					(formIngredient): RecipeIngredient => ({
						name: formIngredient.formIngredientName,
						measurement: formIngredient.formIngredientMeasurement,
						amount: isNaN(formIngredient.formIngredientAmount ?? 0)
							? 0
							: formIngredient.formIngredientAmount ?? 0,
					}),
				),
			});

		const recipe: Partial<RecipeObject> = {
			id: uuid(),
			createdAt: new Date(),
			name: recipeForm.formName,
			desc: recipeForm.formDesc ?? undefined,
			costPerServing: 0,
			servings: recipeForm.formServings,
			cookingTime: recipeForm.formCookingTime,
			originalRecipe: recipeForm.formOriginalRecipe ?? undefined,
			steps: recipeForm.formSteps.map((step) => step.formStep),
			ingredientGroups: ingredientGroups,
		};
		console.log(recipe);
	};

	const handleFormSubmit = (data: RecipeForm) => {
		if (data.formImage && data.formImage?.type?.split("/")[0] !== "image") {
			setError("formImage", {
				type: "filetype",
				message: "Endast bilder är tillåtna",
			});
			return;
		}

		if (data.formImage && data.formImage?.size > 10000000) {
			setError("formImage", {
				type: "filesize",
				message: "Din bild överstiger 10MB i storlek",
			});
			return;
		}

		alert(JSON.stringify(data, null, 4));
		console.log(data);
		recipeFormToRecipe(data);
	};

	return (
		<VStack spacing="8" align="stretch" p="8">
			<Heading as="h1" size="2xl">
				Skapa recept
			</Heading>
			<form
				id="createRecipeForm"
				onSubmit={handleSubmit(handleFormSubmit)}
			>
				<Grid templateColumns="repeat(2, 1fr)" gap="4">
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<NameField
							hookFormErrors={errors}
							hookFormRegister={register}
						/>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<OriginalRecipeField
							hookFormErrors={errors}
							hookFormRegister={register}
						/>
					</GridItem>
					<GridItem colSpan={2}>
						<DescField
							hookFormErrors={errors}
							hookFormRegister={register}
						/>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<ServingsField
							hookFormErrors={errors}
							hookFormRegister={register}
						/>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<CookingTimeField
							hookFormErrors={errors}
							hookFormRegister={register}
						/>
					</GridItem>
					<GridItem colSpan={2}>
						<ImageField
							hookFormControl={control}
							hookFormErrors={errors}
							imageFile={watch("formImage")}
						/>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<IngredientsContainer
							hookFormRegister={register}
							hookFormControl={control}
						/>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<StepFieldsContainer
							hookFormRegister={register}
							hookFormControl={control}
						/>
					</GridItem>
					<GridItem colSpan={2}>
						<Button
							type="submit"
							colorScheme="teal"
							size="lg"
							w="full"
						>
							Skapa recept
						</Button>
					</GridItem>
				</Grid>
			</form>
		</VStack>
	);
}

export default CreateRecipePage;
