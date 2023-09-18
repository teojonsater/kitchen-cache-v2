import React from "react";
import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	HStack,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack,
	Text,
} from "@chakra-ui/react";
import type RecipeObject from "../../../../../interfaces/recipe/RecipeObject";
import getAllCostPerServings from "../../../utils/getAllCostPerServings";

interface Props {
	allRecipes: RecipeObject[];
	filterCostPerServingValues: number[];
	onFilterCostPerServingValues: (newValues: [number, number]) => void;
}

function PriceFilter({
	allRecipes,
	filterCostPerServingValues,
	onFilterCostPerServingValues,
}: Props) {
	return (
		<AccordionItem>
			<Text>
				<AccordionButton>
					<Box as="span" flex="1" textAlign="left">
						Pris
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</Text>
			<AccordionPanel pb={4}>
				<HStack w="full">
					<Text w="12">{filterCostPerServingValues[0]}</Text>
					<RangeSlider
						aria-label={["min", "max"]}
						value={filterCostPerServingValues}
						min={Math.floor(
							Math.min(...getAllCostPerServings(allRecipes)),
						)}
						max={Math.ceil(
							Math.max(...getAllCostPerServings(allRecipes)),
						)}
						step={1}
						onChange={onFilterCostPerServingValues}
						colorScheme="teal"
					>
						<RangeSliderTrack>
							<RangeSliderFilledTrack />
						</RangeSliderTrack>
						<RangeSliderThumb index={0} ringOffsetColor={"teal"} />
						<RangeSliderThumb index={1} />
					</RangeSlider>
					<Text w="12" align="end">
						{filterCostPerServingValues[1]}
					</Text>
				</HStack>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default PriceFilter;
