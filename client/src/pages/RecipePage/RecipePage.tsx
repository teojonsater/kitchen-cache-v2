import React from "react";
import { Flex } from "@chakra-ui/react";
import RecipeBody from "./components/RecipeBody";
import { v4 as uuid } from "uuid";
import RecipeHeader from "./components/RecipeHeader";
import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import RecipeBanner from "./components/RecipeBanner";

function RecipePage() {
	const [recipe] = React.useState<RecipeObject>({
		cookingTime: 30,
		createdAt: new Date(),
		desc: "Detta är en beskrivning på ett recept. Denna beskrivning kommer fortsätta för att se hur det ser ut när det blir flera rader.",
		id: uuid(),
		image: "https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg",
		ingredientGroups: [
			{
				name: "Grupp 1",
				ingredients: [
					{
						amount: 1,
						measurement: "kg",
						name: "Kyckling",
					},
					{
						amount: 10,
						measurement: "dl",
						name: "Ris",
					},
				],
			},
			{
				name: "Grupp 2",
				ingredients: [
					{
						amount: 1,
						measurement: "kg",
						name: "Kyckling",
					},
				],
			},
		],
		originalRecipe: "https://www.google.com",
		servings: 5,
		steps: ["Stek kycklingen", "Koka riset", "Koka såsen", "Servera"],
		name: "Receptnamn",
	});

	return (
		<Flex direction="column">
			<RecipeHeader
				title={recipe.name}
				originalRecipe={recipe.originalRecipe}
				cookingTime={recipe.cookingTime}
				ingredientGroups={recipe.ingredientGroups}
			/>
			<RecipeBanner image={recipe.image} />
			<RecipeBody />
		</Flex>
	);
}

export default RecipePage;
