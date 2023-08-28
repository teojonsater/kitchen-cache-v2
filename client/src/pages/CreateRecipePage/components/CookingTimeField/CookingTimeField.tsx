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

function CookingTimeField() {
	return (
		<Card>
			<CardBody>
				<FormControl isRequired>
					<FormLabel>Tid (min)</FormLabel>
					<NumberInput>
						<NumberInputField placeholder="Tid (min)" />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					<FormHelperText>
						Hur lång tid tar det att laga receptet?
					</FormHelperText>
				</FormControl>
			</CardBody>
		</Card>
	);
}

export default CookingTimeField;
