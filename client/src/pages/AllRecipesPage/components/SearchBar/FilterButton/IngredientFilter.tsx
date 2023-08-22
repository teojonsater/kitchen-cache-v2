import React from "react";
import type { ChangeEvent } from "react";
import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	FormControl,
	FormLabel,
	HStack,
	Input,
	Switch,
	Text,
	VStack,
} from "@chakra-ui/react";

interface Props {
	searchedIngredients: string[];
	filterIngredientsSearchQuery: string;
	onFilterIngredientsSearchQueryChange: (
		event: ChangeEvent<HTMLInputElement>,
	) => void;
}

function IngredientFilter({
	searchedIngredients,
	filterIngredientsSearchQuery,
	onFilterIngredientsSearchQueryChange,
}: Props) {
	return (
		<AccordionItem>
			<Text>
				<AccordionButton>
					<Box as="span" flex="1" textAlign="left">
						Ingredienser
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</Text>
			<AccordionPanel pb="4">
				<VStack spacing="3">
					<Input
						placeholder="Sök ingrediens"
						bgColor="white"
						shadow="base"
						borderRadius="full"
						focusBorderColor="teal.500"
						value={filterIngredientsSearchQuery}
						onChange={onFilterIngredientsSearchQueryChange}
					/>
					<FormControl>
						<HStack>
							<FormLabel mb="0">
								Receptet ska inte innehålla...
							</FormLabel>
							<Switch colorScheme="teal" />
						</HStack>
					</FormControl>
					<VStack>
						{searchedIngredients.map((ingredient, index) => (
							<Text key={index}>{ingredient}</Text>
						))}
					</VStack>
				</VStack>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default IngredientFilter;
