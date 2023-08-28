import React, { useState } from "react";
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
import getAllCookingTimes from "../../../utils/getAllCookingTimes";
import type RecipeObject from "../../../../../interfaces/recipe/RecipeObject";

interface Props {
	allRecipes: RecipeObject[];
	filterCookingTimeValues: number[];
	onFilterCookingTimeValuesChange: (newValues: [number, number]) => void;
}

function TimeFilter({
	allRecipes,
	filterCookingTimeValues,
	onFilterCookingTimeValuesChange,
}: Props) {
	return (
		<AccordionItem>
			<Text>
				<AccordionButton>
					<Box as="span" flex="1" textAlign="left">
						Tid
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</Text>
			<AccordionPanel pb={4}>
				<HStack w="full">
					<Text w="12">{filterCookingTimeValues[0]}</Text>
					<RangeSlider
						aria-label={["min", "max"]}
						value={filterCookingTimeValues}
						min={Math.min(...getAllCookingTimes(allRecipes))}
						max={Math.max(...getAllCookingTimes(allRecipes))}
						step={5}
						onChange={onFilterCookingTimeValuesChange}
						colorScheme="teal"
					>
						<RangeSliderTrack>
							<RangeSliderFilledTrack />
						</RangeSliderTrack>
						<RangeSliderThumb index={0} ringOffsetColor={"teal"} />
						<RangeSliderThumb index={1} />
					</RangeSlider>
					<Text w="12">{filterCookingTimeValues[1]}</Text>
				</HStack>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default TimeFilter;
