import {
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Icon,
	IconButton,
	Spacer,
	Switch,
	Text,
} from "@chakra-ui/react";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import React from "react";

function IngredientControls() {
	return (
		<Flex w="full" alignItems="center" gap="2">
			<HStack>
				<IconButton
					aria-label={"decrease no. ingredients"}
					icon={<Icon as={RemoveRoundedIcon} boxSize="4" />}
					size="xs"
					variant="outline"
					colorScheme="teal"
				/>
				<Text>2 portioner</Text>
				<IconButton
					aria-label={"increase no. ingredients"}
					icon={<Icon as={AddRoundedIcon} boxSize="4" />}
					size="xs"
					variant="outline"
					colorScheme="teal"
				/>
			</HStack>
			<Spacer />
			<FormControl display="flex" alignItems="center" w="fit-content">
				<FormLabel htmlFor="ingredientMeasurement" mb="0" mr="2">
					SE
				</FormLabel>
				<Switch id="ingredientMeasurement" colorScheme="teal" />
			</FormControl>
		</Flex>
	);
}

export default IngredientControls;
