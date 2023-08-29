import {
	Button,
	Card,
	CardBody,
	Divider,
	FormLabel,
	Icon,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import IngredientGroupField from "./components/IngredientGroupField";
import IngredientField from "./components/IngredientField";

function IngredientsFieldsContainer() {
	return (
		<Card>
			<CardBody>
				<FormLabel>Ingredienser</FormLabel>
				<VStack align="stretch" spacing="4" divider={<Divider />}>
					<VStack align="stretch">
						<IngredientField />
						<Button
							maxW="fit-content"
							size="sm"
							colorScheme="teal"
							variant="ghost"
							leftIcon={<Icon as={AddRoundedIcon} boxSize="4" />}
						>
							Lägg till ingrediens
						</Button>
					</VStack>
					<IngredientGroupField />
					<IngredientGroupField />
					<Button
						maxW="fit-content"
						size="sm"
						colorScheme="teal"
						variant="ghost"
						leftIcon={<Icon as={AddRoundedIcon} boxSize="4" />}
					>
						Lägg till ingrediensgrupp
					</Button>
				</VStack>
			</CardBody>
		</Card>
	);
}

/*
<Flex direction="row">
			<FormControl>
				<NumberInput size="sm">
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</FormControl>
			<FormControl isRequired>
				<Select size="sm">
					{measurementsArray.map((measurement, index) => (
						<option key={index}>{measurement}</option>
					))}
				</Select>
			</FormControl>
			<FormControl isRequired>
				<Input placeholder="Ingrediens" size="sm" />
			</FormControl>
		</Flex>
 */

export default IngredientsFieldsContainer;
