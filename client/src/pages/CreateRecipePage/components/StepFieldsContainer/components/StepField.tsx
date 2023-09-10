/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { FormControl, HStack, Icon, IconButton, Input } from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import type { UseFieldArrayReturn } from "react-hook-form";
import type RecipeForm from "../../../interfaces/RecipeForm";

interface Props {
	index: number;
	hookFormFields: UseFieldArrayReturn<RecipeForm, "formSteps">;
	hookFormRegister: any;
}

function StepField({ index, hookFormFields, hookFormRegister }: Props) {
	return (
		<HStack>
			<FormControl isRequired>
				<Input
					placeholder={`Steg ${index + 1}`}
					{...hookFormRegister(
						`formSteps.${index}.formStep` as const,
						{
							required: `Du måste ange steg ${index + 1}`,
						},
					)}
				/>
			</FormControl>
			<IconButton
				size="sm"
				aria-label="Delete Step"
				variant="ghost"
				borderRadius="full"
				icon={<Icon as={CloseRoundedIcon} boxSize="4" />}
				isDisabled={hookFormFields.fields.length === 1}
				onClick={() => {
					hookFormFields.remove(index);
				}}
			/>
		</HStack>
	);
}

export default StepField;
