import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import DescriptionCard from "../../../../design/DescriptionCard";
import StatsCard from "../../../../design/StatsCard";
import IngredientsCard from "../../../../design/IngredientsCard";
import StepsCard from "../../../../design/StepsCard";

function RecipeBody() {
	return (
		<SimpleGrid columns={2} spacing={8} p="8">
			<DescriptionCard />
			<StatsCard />
			<IngredientsCard />
			<StepsCard />
		</SimpleGrid>
	);
}

export default RecipeBody;
