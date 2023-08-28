import React from "react";
import type RecipeIngredientGroup from "../../../../../interfaces/recipe/RecipeIngredientGroup";
import { Icon, Text, HStack, StackDivider } from "@chakra-ui/react";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import countNoOfIngredients from "../../../../../utils/countNoOfIngredients";

interface Props {
	cookingTime: number;
	ingredientGroups: RecipeIngredientGroup[];
	costPerServing: number;
}

function RecipeStats({ cookingTime, ingredientGroups, costPerServing }: Props) {
	return (
		<HStack divider={<StackDivider />} color="gray.600">
			<HStack>
				<Icon as={AccessTimeRoundedIcon} boxSize="6" />
				<Text fontSize="sm">{cookingTime} min</Text>
			</HStack>
			<HStack>
				<Icon as={EggOutlinedIcon} boxSize="6" />
				<Text fontSize="sm">
					{countNoOfIngredients(ingredientGroups)} ingredienser
				</Text>
			</HStack>
			<HStack>
				<Icon as={PaymentsOutlinedIcon} boxSize="6" />
				<Text fontSize="sm">{costPerServing.toFixed(2)} kr</Text>
			</HStack>
		</HStack>
	);
}

export default RecipeStats;
