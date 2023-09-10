/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { FormControl, HStack, Icon, IconButton, Input } from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface Props {
	index: number;
	formStepFields: any;
	hookFormRegister: any;
}

function StepField({ index, formStepFields, hookFormRegister }: Props) {
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
				isDisabled={formStepFields.fields.length === 1}
				onClick={() => {
					formStepFields.remove(index);
				}}
			/>
		</HStack>
	);
}

export default StepField;
