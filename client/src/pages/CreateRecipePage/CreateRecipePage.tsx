import React from "react";
import { Button, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import NameField from "./components/NameField";
import OriginalRecipeField from "./components/OriginalRecipeField";
import DescField from "./components/DescField";
import ServingsField from "./components/ServingsField";
import CookingTimeField from "./components/CookingTimeField";
import ImageField from "./components/ImageField";
import IngredientsFieldsContainer from "../../design/IngredientsFieldsContainer";
import StepFieldsContainer from "./components/StepFieldsContainer";
import { useForm, useFieldArray } from "react-hook-form";
import type RecipeForm from "./interfaces/RecipeForm";

function CreateRecipePage() {
	const defaultFormValues: Partial<RecipeForm> = {
		formServings: 4,
		formCookingTime: 60,
		formSteps: [{ formStep: "" }],
	};

	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
	} = useForm<RecipeForm>({
		defaultValues: defaultFormValues,
	});

	const formStepFields = useFieldArray({
		control: control,
		name: "formSteps",
	});
	const handleFormSubmit = (data: RecipeForm) => {
		alert(JSON.stringify(data, null, 4));
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
						<ImageField />
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<IngredientsFieldsContainer />
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<StepFieldsContainer
							hookFormRegister={register}
							hookFormFields={formStepFields}
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
