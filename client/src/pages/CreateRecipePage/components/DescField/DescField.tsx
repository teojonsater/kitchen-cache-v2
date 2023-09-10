/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
	Card,
	CardBody,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Textarea,
} from "@chakra-ui/react";
import React from "react";
import type { useForm } from "react-hook-form";

interface Props {
	hookFormErrors: ReturnType<typeof useForm>["formState"]["errors"];
	hookFormRegister: any;
}

function DescField({ hookFormErrors, hookFormRegister }: Props) {
	return (
		<Card>
			<CardBody>
				<FormControl isInvalid={!!hookFormErrors.formDesc}>
					<FormLabel>Beskrivning</FormLabel>
					<Textarea
						placeholder="Beskrivning"
						{...hookFormRegister("formDesc")}
					/>
					{hookFormErrors && hookFormErrors.formOriginalRecipe && (
						<FormErrorMessage>
							{hookFormErrors.formDesc?.message?.toString()}
						</FormErrorMessage>
					)}
					<FormHelperText>Ge receptet en beskrivning</FormHelperText>
				</FormControl>
			</CardBody>
		</Card>
	);
}

export default DescField;
