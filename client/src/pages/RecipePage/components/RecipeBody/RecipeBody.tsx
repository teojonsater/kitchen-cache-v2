import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import DescCard from "./components/DescCard";
import IngredientsCard from "./components/IngredientsCard";
import StepsCard from "./components/StepsCard";

function RecipeBody() {
	return (
		<Grid templateColumns="repeat(2, 1fr)" gap="8" p="8">
			<GridItem colSpan={2}>
				<DescCard />
			</GridItem>
			<GridItem colSpan={1}>
				<IngredientsCard />
			</GridItem>
			<GridItem colSpan={1}>
				<StepsCard />
			</GridItem>
		</Grid>
	);
}

export default RecipeBody;
