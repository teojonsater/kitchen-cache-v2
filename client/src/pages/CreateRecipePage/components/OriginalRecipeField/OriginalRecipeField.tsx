import {
	Card,
	CardBody,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import React from "react";

function OriginalRecipeField() {
	return (
		<Card h="full">
			<CardBody>
				<FormControl>
					<FormLabel>Ursprungligt recept</FormLabel>
					<Input placeholder="Ursprungligt recept" />
					<FormHelperText>
						Var kommer receptet ifrån? (länk eller text)
					</FormHelperText>
				</FormControl>
			</CardBody>
		</Card>
	);
}

export default OriginalRecipeField;
