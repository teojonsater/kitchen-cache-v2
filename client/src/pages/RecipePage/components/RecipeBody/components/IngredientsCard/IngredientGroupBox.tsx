import React from "react";
import { Box, Heading, UnorderedList } from "@chakra-ui/react";
import type RecipeIngredientGroup from "../../../../../../interfaces/recipe/RecipeIngredientGroup";
import IngredientItem from "./IngredientItem";
import MeasurementUnit from "../../../../../../utils/measurements/MeasurementUnit";

interface Props {
	ingredientGroup: RecipeIngredientGroup;
	originalServings: number;
	alteredServings: number;
	useMetric: boolean;
}

function IngredientGroupBox({
	ingredientGroup,
	originalServings,
	alteredServings,
	useMetric,
}: Props) {
	return (
		<Box border="1px solid" borderColor="gray.200" borderRadius="lg" p="3">
			{ingredientGroup.name && (
				<Heading size="sm" mb="2" color="teal.700">
					{ingredientGroup.name}
				</Heading>
			)}

			<UnorderedList spacing="2">
				{ingredientGroup.ingredients.map((ingredient, index) => {
					return (
						<>
							<IngredientItem
								amount={ingredient.amount}
								measurement={ingredient.measurement}
								ingredient={ingredient.name}
								originalServings={originalServings}
								alteredServings={alteredServings}
								useMetric={useMetric}
								key={index}
							/>
						</>
					);
				})}
			</UnorderedList>
		</Box>
	);
}

export default IngredientGroupBox;
