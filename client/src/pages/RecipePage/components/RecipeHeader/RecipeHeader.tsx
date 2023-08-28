import React from "react";
import { Heading, HStack, Icon, IconButton, VStack } from "@chakra-ui/react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import type RecipeIngredientGroup from "../../../../interfaces/recipe/RecipeIngredientGroup";
import OriginalRecipe from "./components/OriginalRecipe";
import RecipeStats from "./components/RecipeStats";

interface Props {
	title: string;
	originalRecipe?: string;
	cookingTime?: number;
	ingredientGroups?: RecipeIngredientGroup[];
	costPerServing: number;
}

function RecipeHeader({
	title,
	originalRecipe = undefined,
	cookingTime = undefined,
	ingredientGroups = undefined,
	costPerServing,
}: Props) {
	return (
		<HStack p="8" justify="space-between" align="start">
			<VStack align="start">
				<Heading as="h1" size="2xl">
					{title}
				</Heading>
				{cookingTime && ingredientGroups && (
					<RecipeStats
						cookingTime={cookingTime}
						ingredientGroups={ingredientGroups}
						costPerServing={costPerServing}
					/>
				)}
				{originalRecipe && (
					<OriginalRecipe originalRecipe={originalRecipe} />
				)}
			</VStack>
			<IconButton
				aria-label="Edit recipe"
				icon={<Icon as={EditRoundedIcon} />}
				variant="link"
			/>
		</HStack>
	);
}

export default RecipeHeader;
