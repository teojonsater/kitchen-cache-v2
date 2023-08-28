import React from "react";
import {
	Card,
	CardBody,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
} from "@chakra-ui/react";

function NameField() {
	return (
		<Card>
			<CardBody>
				<FormControl isRequired>
					<FormLabel>Titel</FormLabel>
					<Input placeholder="Titel" />
					<FormHelperText>Vad ska receptet heta?</FormHelperText>
				</FormControl>
			</CardBody>
		</Card>
	);
}

export default NameField;
