import React from "react";
import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Text,
} from "@chakra-ui/react";

function IngredientFilter() {
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
			<AccordionPanel pb={4}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat.
			</AccordionPanel>
		</AccordionItem>
	);
}

export default IngredientFilter;
