import React from "react";
import { Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import NameField from "./components/NameField";
import OriginalRecipeField from "./components/OriginalRecipeField";
import DescField from "./components/DescField";
import ServingsField from "./components/ServingsField";
import CookingTimeField from "./components/CookingTimeField";
import ImageField from "./components/ImageField";
import IngredientsFieldsContainer from "./components/IngredientsFieldsContainer";
import StepsFieldsContainer from "./components/StepsFieldsContainer";

function CreateRecipePage() {
	return (
		<VStack spacing="8" align="stretch" p="8">
			<Heading as="h1" size="2xl">
				Skapa recept
			</Heading>
			<Grid templateColumns="repeat(2, 1fr)" gap="4">
				<GridItem colSpan={{ base: 2, md: 1 }}>
					<NameField />
				</GridItem>
				<GridItem colSpan={{ base: 2, md: 1 }}>
					<OriginalRecipeField />
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
			</Grid>
		</VStack>
	);
}

export default CreateRecipePage;
