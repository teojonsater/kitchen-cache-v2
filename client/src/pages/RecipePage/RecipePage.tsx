import React from "react";
import { Flex } from "@chakra-ui/react";
import RecipeBody from "./components/RecipeBody";
import RecipeHeader from "./components/RecipeHeader";
import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import RecipeBanner from "./components/RecipeBanner";
import dummyRecipes from "../../utils/dummyRecipes";

function RecipePage() {
	const [recipe] = React.useState<RecipeObject>(
		dummyRecipes[Math.floor(Math.random() * dummyRecipes.length)],
	);

	return (
		<Flex direction="column">
			<RecipeHeader
				title={recipe.name}
				originalRecipe={recipe.originalRecipe}
				cookingTime={recipe.cookingTime}
				ingredientGroups={recipe.ingredientGroups}
			/>
			<RecipeBanner image={recipe.image} />
			<RecipeBody
				desc={recipe.desc}
				ingredientGroups={recipe.ingredientGroups}
				steps={recipe.steps}
				servings={recipe.servings}
			/>
		</Flex>
	);
}

export default RecipePage;
