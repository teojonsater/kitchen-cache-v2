import React from "react";
import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import type RecipeIngredientGroup from "../../../../../../interfaces/recipe/RecipeIngredientGroup";

interface Props {
	ingredientGroup: RecipeIngredientGroup;
}

function IngredientGroupBox({ ingredientGroup }: Props) {
	return (
		<Box border="1px solid" borderColor="gray.200" borderRadius="lg" p="3">
			{ingredientGroup.name && (
				<Heading size="sm" mb="2" color="teal.700" fontWeight="bold">
					{ingredientGroup.name}
				</Heading>
			)}

			<UnorderedList>
				{ingredientGroup.ingredients.map((ingredient, index) => (
					<ListItem key={index}>
						<b>
							{ingredient.amount} {ingredient.measurement}
						</b>{" "}
						{ingredient.name}
					</ListItem>
				))}
			</UnorderedList>
		</Box>
	);
}

export default IngredientGroupBox;
