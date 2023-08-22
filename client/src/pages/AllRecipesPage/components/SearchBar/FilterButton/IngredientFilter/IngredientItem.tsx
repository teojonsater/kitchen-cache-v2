import React from "react";
import type { ChangeEvent } from "react";
import { Button, Icon, Text } from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface Props {
	ingredient: string;
	onIngredientFilterChange: (ingredient: string) => void;
	filteredIngredients: string[];
}

function IngredientItem({
	ingredient,
	onIngredientFilterChange,
	filteredIngredients,
}: Props) {
	return (
		<Button
			maxW="full"
			colorScheme="teal"
			borderRadius="full"
			onClick={() => {
				onIngredientFilterChange(ingredient);
			}}
			variant={
				filteredIngredients.includes(ingredient.toLowerCase())
					? "solid"
					: "outline"
			}
			rightIcon={
				filteredIngredients.includes(ingredient.toLowerCase()) ? (
					<Icon as={CloseRoundedIcon} />
				) : undefined
			}
		>
			<Text noOfLines={1} w="full">
				{ingredient}
			</Text>
		</Button>
	);
}

export default IngredientItem;
