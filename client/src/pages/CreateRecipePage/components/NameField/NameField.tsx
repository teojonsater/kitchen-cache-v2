/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import {
	Card,
	CardBody,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import type { useForm } from "react-hook-form";

interface Props {
	hookFormErrors: ReturnType<typeof useForm>["formState"]["errors"];
	hookFormRegister: any;
}

function NameField({ hookFormErrors, hookFormRegister }: Props) {
	return (
		<Card h="full">
			<CardBody>
				<FormControl isRequired isInvalid={!!hookFormErrors.formName}>
					<FormLabel>Titel</FormLabel>
					<Input
						placeholder="Titel"
						{...hookFormRegister("formName", {
							required: "Du måste ge receptet ett namn.",
						})}
					/>
					{hookFormErrors && hookFormErrors.formName && (
						<FormErrorMessage>
							{hookFormErrors.formName?.message?.toString()}
						</FormErrorMessage>
					)}
					<FormHelperText>Vad ska receptet heta?</FormHelperText>
				</FormControl>
			</CardBody>
		</Card>
	);
}

export default NameField;
