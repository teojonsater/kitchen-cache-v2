import React, { useState } from "react";
import {
	Card,
	CardBody,
	Flex,
	Heading,
	StackDivider,
	useBoolean,
	VStack,
} from "@chakra-ui/react";
import type RecipeIngredientGroup from "../../../../../../interfaces/recipe/RecipeIngredientGroup";
import IngredientGroupBox from "./IngredientGroupBox";
import IngredientControls from "./IngredientControls";

interface Props {
	ingredientGroups: RecipeIngredientGroup[];
	servings: number;
}

function IngredientsCard({ ingredientGroups, servings }: Props) {
	const [alteredServings, setAlteredServings] = useState(servings);
	const [useMetric, setUseMetric] = useBoolean(false);

	const handleAlteredServingsIncrease = () => {
		setAlteredServings((prevServings) => prevServings + 1);
	};

	const handleAlteredServingsDecrease = () => {
		setAlteredServings((prevServings) => prevServings - 1);
	};

	const handleUseMetricToggle = () => {
		setUseMetric.toggle();
	};

	return (
		<Card>
			<CardBody>
				<Flex direction="column" gap="5">
					<VStack
						spacing="4"
						alignItems="center"
						divider={<StackDivider />}
					>
						<Heading size="md" variant="highlighted">
							Ingredienser
						</Heading>
						<IngredientControls
							servings={alteredServings}
							onAlteredServingsIncrease={
								handleAlteredServingsIncrease
							}
							onAlteredServingsDecrease={
								handleAlteredServingsDecrease
							}
							useMetric={useMetric}
							onUseMetricToggle={handleUseMetricToggle}
						/>
					</VStack>
					{ingredientGroups.map((ingredientGroup, index) => (
						<IngredientGroupBox
							ingredientGroup={ingredientGroup}
							originalServings={servings}
							alteredServings={alteredServings}
							key={index}
						/>
					))}
				</Flex>
			</CardBody>
		</Card>
	);
}

export default IngredientsCard;
