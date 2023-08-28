import {
	Card,
	CardBody,
	FormControl,
	FormHelperText,
	FormLabel,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
} from "@chakra-ui/react";
import React from "react";

function ServingsField() {
	return (
		<Card>
			<CardBody>
				<FormControl isRequired>
					<FormLabel>Portioner</FormLabel>
					<NumberInput min={1} max={1000}>
						<NumberInputField placeholder="Portioner" />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					<FormHelperText>
						Hur många portioner blir det?
					</FormHelperText>
				</FormControl>
			</CardBody>
		</Card>
	);
}

export default ServingsField;
