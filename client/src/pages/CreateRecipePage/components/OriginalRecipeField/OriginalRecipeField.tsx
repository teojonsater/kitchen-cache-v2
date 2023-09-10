/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
	Card,
	CardBody,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import React from "react";
import type { useForm } from "react-hook-form";

interface Props {
	hookFormErrors: ReturnType<typeof useForm>["formState"]["errors"];
	hookFormRegister: any;
}

function OriginalRecipeField({ hookFormErrors, hookFormRegister }: Props) {
	return (
		<Card h="full">
			<CardBody>
				<FormControl isInvalid={!!hookFormErrors.formOriginalRecipe}>
					<FormLabel>Ursprungligt recept</FormLabel>
					<Input
						placeholder="Ursprungligt recept"
						{...hookFormRegister("formOriginalRecipe")}
					/>
					{hookFormErrors && hookFormErrors.formOriginalRecipe && (
						<FormErrorMessage>
							{hookFormErrors.formOriginalRecipe?.message?.toString()}
						</FormErrorMessage>
					)}
					<FormHelperText>
						Var kommer receptet ifrån? (länk eller text)
					</FormHelperText>
				</FormControl>
			</CardBody>
		</Card>
	);
}

export default OriginalRecipeField;
