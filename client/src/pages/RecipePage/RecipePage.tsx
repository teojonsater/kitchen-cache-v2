import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import RecipeBody from "./components/RecipeBody";
import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import { v4 as uuid } from "uuid";

function RecipePage() {
	const placeholderRecipe: RecipeObject = {
		cookingTime: 90,
		createdAt: new Date(),
		desc: "Detta är en beskrivning på ett recept. Denna beskrivning kommer fortsätta för att se hur det ser ut när det blir flera rader.",
		id: uuid(),
		image: "https://via.placeholder.com/1000",
		ingredientGroups: [
			{
				title: "Grupp 1",
				ingredients: [
					{
						amount: 1,
						measurement: "kg",
						title: "Kyckling",
					},
					{
						amount: 10,
						measurement: "dl",
						title: "Ris",
					},
				],
			},
			{
				title: "Grupp 2",
				ingredients: [
					{
						amount: 1,
						measurement: "kg",
						title: "Kyckling",
					},
				],
			},
		],
		originalRecipe: "Mammas kycklinggryta",
		servings: 5,
		steps: ["Stek kycklingen", "Koka riset", "Koka såsen", "Servera"],
		title: "Recepttitel",
	};

	return (
		<Flex direction="column">
			<Box>Header</Box>
			<Box>Banner</Box>
			<RecipeBody />
		</Flex>
	);
}

export default RecipePage;
