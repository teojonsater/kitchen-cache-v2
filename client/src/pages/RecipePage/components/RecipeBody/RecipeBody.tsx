import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import DescCard from "./components/DescCard";
import IngredientsCard from "./components/IngredientsCard";
import StepsCard from "./components/StepsCard";
import type RecipeIngredientGroup from "../../../../interfaces/recipe/RecipeIngredientGroup";

interface Props {
	desc?: string;
	ingredientGroups: RecipeIngredientGroup[];
	steps: string[];
}

function RecipeBody({ desc = undefined, ingredientGroups, steps }: Props) {
	return (
		<Grid templateColumns="repeat(2, 1fr)" gap="8" p="8">
			{desc && (
				<GridItem colSpan={2}>
					<DescCard desc={desc} />
				</GridItem>
			)}
			<GridItem colSpan={1}>
				<IngredientsCard ingredientGroups={ingredientGroups} />
			</GridItem>
			<GridItem colSpan={1}>
				<StepsCard />
			</GridItem>
		</Grid>
	);
}

export default RecipeBody;
