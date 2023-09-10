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

function ServingsField({ hookFormErrors, hookFormRegister }: Props) {
	return (
		<Card>
			<CardBody>
				<FormControl
					isRequired
					isInvalid={!!hookFormErrors.formServings}
				>
					<FormLabel>Portioner</FormLabel>
					<NumberInput min={1} max={1000}>
						<NumberInputField
							placeholder="Portioner"
							{...hookFormRegister("formServings", {
								required: "Du måste ange mängden portioner",
								valueAsNumber: true,
								max: {
									value: 1000,
									message:
										"Du kan inte ha mer än 1000 portioner",
								},
								min: {
									value: 1,
									message: "Du måste ha minst 1 portion",
								},
							})}
						/>
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					{hookFormErrors && hookFormErrors.formServings && (
						<FormErrorMessage>
							{hookFormErrors.formServings?.message?.toString()}
						</FormErrorMessage>
					)}
					<FormHelperText>
						Hur många portioner blir det?
					</FormHelperText>
				</FormControl>
			</CardBody>
		</Card>
	);
}

export default ServingsField;
