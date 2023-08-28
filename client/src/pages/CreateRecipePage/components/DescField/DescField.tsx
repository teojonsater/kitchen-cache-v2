import {
	Card,
	CardBody,
	FormControl,
	FormHelperText,
	FormLabel,
	Textarea,
} from "@chakra-ui/react";
import React from "react";

function DescField() {
	return (
		<Card>
			<CardBody>
				<FormControl>
					<FormLabel>Beskrivning</FormLabel>
					<Textarea placeholder="Beskrivning" />
					<FormHelperText>Ge receptet en beskrivning</FormHelperText>
				</FormControl>
			</CardBody>
		</Card>
	);
}

export default DescField;
