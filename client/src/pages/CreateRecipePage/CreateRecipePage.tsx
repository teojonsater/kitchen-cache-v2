import React from "react";
import { Button, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import NameField from "./components/NameField";
import OriginalRecipeField from "./components/OriginalRecipeField";
import DescField from "./components/DescField";
import ServingsField from "./components/ServingsField";
import CookingTimeField from "./components/CookingTimeField";
import ImageField from "./components/ImageField";
import IngredientsFieldsContainer from "../../design/IngredientsFieldsContainer";
import StepsFieldsContainer from "./components/StepsFieldsContainer";
import { useForm } from "react-hook-form";
import type RecipeForm from "./interfaces/RecipeForm";

function CreateRecipePage() {
	const defaultFormValues: Partial<RecipeForm> = {
		formServings: 4,
		formCookingTime: 60,
	};

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<RecipeForm>({
		defaultValues: defaultFormValues,
	});

	const handleFormSubmit = (data: RecipeForm) => {
		alert(JSON.stringify(data));
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
						<DescField />
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<ServingsField />
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<CookingTimeField />
					</GridItem>
					<GridItem colSpan={2}>
						<ImageField />
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<IngredientsFieldsContainer />
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<StepsFieldsContainer />
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
