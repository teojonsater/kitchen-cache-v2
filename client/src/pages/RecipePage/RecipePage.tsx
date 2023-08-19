import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import RecipeBody from "./components/RecipeBody";

function RecipePage() {
	return (
		<Flex direction="column">
			<Box>Header</Box>
			<Box>Banner</Box>
			<RecipeBody />
		</Flex>
	);
}

export default RecipePage;
