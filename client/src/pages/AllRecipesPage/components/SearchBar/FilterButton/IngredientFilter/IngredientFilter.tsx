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
import IngredientItem from "./IngredientItem";

interface Props {
	searchedIngredients: string[];
	filterIngredientsSearchQuery: string;
	onFilterIngredientsSearchQueryChange: (
		event: ChangeEvent<HTMLInputElement>,
	) => void;
	onIngredientFilterChange: (ingredient: string) => void;
	filteredIngredients: string[];
	onRecipeShouldNotContainSwitchChange: () => void;
	recipeShouldNotContainSwitch: boolean;
	onRecipeShouldContainEveryIngredientSwitch: () => void;
	recipeShouldContainEveryIngredientSwitch: boolean;
}

function IngredientFilter({
	searchedIngredients,
	filterIngredientsSearchQuery,
	onFilterIngredientsSearchQueryChange,
	onIngredientFilterChange,
	filteredIngredients,
	onRecipeShouldNotContainSwitchChange,
	recipeShouldNotContainSwitch,
	onRecipeShouldContainEveryIngredientSwitch,
	recipeShouldContainEveryIngredientSwitch,
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
						<HStack justifyContent="space-between">
							<FormLabel mb="0">
								Receptet ska inte innehålla...
							</FormLabel>
							<Switch
								isChecked={recipeShouldNotContainSwitch}
								onChange={onRecipeShouldNotContainSwitchChange}
								colorScheme="teal"
							/>
						</HStack>
					</FormControl>
					{!recipeShouldNotContainSwitch && (
						<FormControl>
							<HStack justifyContent="space-between">
								<FormLabel mb="0">
									Receptet ska innehålla alla ingredienser...
								</FormLabel>
								<Switch
									isChecked={
										recipeShouldContainEveryIngredientSwitch
									}
									onChange={
										onRecipeShouldContainEveryIngredientSwitch
									}
									colorScheme="teal"
								/>
							</HStack>
						</FormControl>
					)}
					<VStack w="full" align="start">
						{searchedIngredients.map((ingredient, index) => (
							<IngredientItem
								key={index}
								ingredient={ingredient}
								onIngredientFilterChange={
									onIngredientFilterChange
								}
								filteredIngredients={filteredIngredients}
							/>
						))}
					</VStack>
				</VStack>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default IngredientFilter;
