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

function TimeFilter() {
	const [sliderValues, setSliderValues] = useState([10, 30]);

	const handleChange = (newValues: [number, number]) => {
		setSliderValues(newValues);
	};

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
					<Text w="12">{sliderValues[0]}</Text>
					<RangeSlider
						aria-label={["min", "max"]}
						value={sliderValues}
						min={10}
						max={30}
						step={0.01}
						onChange={handleChange}
						colorScheme="teal"
					>
						<RangeSliderTrack>
							<RangeSliderFilledTrack />
						</RangeSliderTrack>
						<RangeSliderThumb index={0} ringOffsetColor={"teal"} />
						<RangeSliderThumb index={1} />
					</RangeSlider>
					<Text w="12">{sliderValues[1]}</Text>
				</HStack>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default TimeFilter;
