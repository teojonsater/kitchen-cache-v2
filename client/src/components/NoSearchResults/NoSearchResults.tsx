import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

function NoSearchResults() {
	return (
		<VStack w="full">
			<Heading>Hittade inga recept</Heading>
			<Text>Testa att ändra sökningen</Text>
		</VStack>
	);
}

export default NoSearchResults;
