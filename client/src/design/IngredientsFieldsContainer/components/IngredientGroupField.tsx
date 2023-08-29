import {
	Button,
	FormControl,
	HStack,
	Icon,
	IconButton,
	Input,
	VStack,
} from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React from "react";
import IngredientField from "./IngredientField";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

function IngredientGroupField() {
	return (
		<VStack align="stretch">
			<HStack>
				<FormControl>
					<Input placeholder="Gruppnamn" />
				</FormControl>
				<IconButton
					size="sm"
					aria-label="Delete Step"
					variant="ghost"
					borderRadius="full"
					icon={<Icon as={CloseRoundedIcon} boxSize="4" />}
				/>
			</HStack>
			<IngredientField showArrow />
			<IngredientField indent />
			<Button
				maxW="fit-content"
				size="sm"
				colorScheme="teal"
				variant="ghost"
				ml="6"
				leftIcon={<Icon as={AddRoundedIcon} boxSize="4" />}
			>
				Lägg till ingrediens
			</Button>
		</VStack>
	);
}

export default IngredientGroupField;
