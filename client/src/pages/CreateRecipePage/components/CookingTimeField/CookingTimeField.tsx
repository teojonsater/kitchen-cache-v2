/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
	Card,
	CardBody,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
} from "@chakra-ui/react";
import React from "react";
import type { useForm } from "react-hook-form";

interface Props {
	hookFormErrors: ReturnType<typeof useForm>["formState"]["errors"];
	hookFormRegister: any;
}

function CookingTimeField({ hookFormErrors, hookFormRegister }: Props) {
	return (
		<Card>
			<CardBody>
				<FormControl
					isRequired
					isInvalid={!!hookFormErrors.formCookingTime}
				>
					<FormLabel>Tid (min)</FormLabel>
					<NumberInput min={5} max={10080}>
						<NumberInputField
							placeholder="Tid (min)"
							{...hookFormRegister("formCookingTime", {
								required: "Du måste ange hur lång tid det tar",
								valueAsNumber: true,
								max: {
									value: 10080,
									message:
										"Du kan inte ha mer än 10080 minuter",
								},
								min: {
									value: 5,
									message: "Du måste ha minst 5 minuter",
								},
							})}
						/>
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					{hookFormErrors && hookFormErrors.formCookingTime && (
						<FormErrorMessage>
							{hookFormErrors.formCookingTime?.message?.toString()}
						</FormErrorMessage>
					)}
					<FormHelperText>
						Hur lång tid tar det att laga receptet?
					</FormHelperText>
				</FormControl>
			</CardBody>
		</Card>
	);
}

export default CookingTimeField;
