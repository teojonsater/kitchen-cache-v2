import React from "react";
import {
	Card,
	CardBody,
	Flex,
	Heading,
	StackDivider,
	VStack,
} from "@chakra-ui/react";
import type RecipeIngredientGroup from "../../../../../../interfaces/recipe/RecipeIngredientGroup";
import IngredientGroupBox from "./IngredientGroupBox";
import IngredientControls from "./IngredientControls";

interface Props {
	ingredientGroups: RecipeIngredientGroup[];
}

function IngredientsCard({ ingredientGroups }: Props) {
	return (
		<Card>
			<CardBody>
				<Flex direction="column" gap="5">
					<VStack
						spacing="4"
						alignItems="start"
						divider={<StackDivider />}
					>
						<Heading
							size="md"
							textAlign="center"
							bgColor="teal.400"
							color="white"
							p="3"
							w="full"
							borderRadius="lg"
						>
							Ingredienser
						</Heading>
						<IngredientControls />
					</VStack>
					{ingredientGroups.map((ingredientGroup, index) => (
						<IngredientGroupBox
							ingredientGroup={ingredientGroup}
							key={index}
						/>
					))}
				</Flex>
			</CardBody>
		</Card>
	);
}

export default IngredientsCard;
