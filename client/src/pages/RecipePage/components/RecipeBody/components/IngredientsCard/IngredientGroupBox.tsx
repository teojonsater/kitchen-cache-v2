import React from "react";
import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import type RecipeIngredientGroup from "../../../../../../interfaces/recipe/RecipeIngredientGroup";

interface Props {
	ingredientGroup: RecipeIngredientGroup;
	originalServings: number;
	alteredServings: number;
}

function IngredientGroupBox({
	ingredientGroup,
	originalServings,
	alteredServings,
}: Props) {
	return (
		<Box border="1px solid" borderColor="gray.200" borderRadius="lg" p="3">
			{ingredientGroup.name && (
				<Heading size="sm" mb="2" color="teal.700" fontWeight="bold">
					{ingredientGroup.name}
				</Heading>
			)}

			<UnorderedList spacing="2">
				{ingredientGroup.ingredients.map((ingredient, index) => {
					const calculatedAmount =
						Math.round(
							((ingredient.amount / originalServings) *
								alteredServings +
								Number.EPSILON) *
								100,
						) / 100;

					return (
						<ListItem key={index}>
							<b>
								{ingredient.amount > 0 && calculatedAmount}{" "}
								{ingredient.measurement != "-" &&
									ingredient.measurement}
							</b>{" "}
							{ingredient.name}
						</ListItem>
					);
				})}
			</UnorderedList>
		</Box>
	);
}

export default IngredientGroupBox;
