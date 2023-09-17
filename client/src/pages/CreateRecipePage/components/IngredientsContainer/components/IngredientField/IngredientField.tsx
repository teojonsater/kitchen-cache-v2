/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import {
	FormControl,
	HStack,
	Icon,
	IconButton,
	Input,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Select,
} from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SubdirectoryArrowRightRoundedIcon from "@mui/icons-material/SubdirectoryArrowRightRounded";
import MeasurementUnit from "../../../../../../utils/measurements/MeasurementUnit";

interface Props {
	ingredientIndex: number;
	hookFormFields: any;
	hookFormRegister: any;
	showArrow?: boolean;
	indent?: boolean;
	registerName: string;
	canRemoveIngredient?: boolean;
}

function IngredientField({
	ingredientIndex,
	hookFormFields,
	hookFormRegister,
	showArrow = false,
	indent = false,
	registerName,
	canRemoveIngredient = true,
}: Props) {
	return (
		<HStack>
			{showArrow && (
				<Icon as={SubdirectoryArrowRightRoundedIcon} boxSize="4" />
			)}
			<HStack ml={indent ? "6" : undefined}>
				<FormControl>
					<NumberInput size="sm" max={10000} min={0} precision={2}>
						<NumberInputField
							placeholder="mängd"
							{...hookFormRegister(
								`${registerName}.formIngredientAmount` as const,
								{
									valueAsNumber: true,
									max: {
										value: 10000,
										message:
											"Du kan inte ha mer än 10000 enheter",
									},
									min: {
										value: 0,
										message: "Du måste ha minst 0 enheter",
									},
								},
							)}
						/>
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<FormControl isRequired>
					<Select
						size="sm"
						{...hookFormRegister(
							`${registerName}..formIngredientMeasurement`,
						)}
					>
						{Object.keys(MeasurementUnit).map(
							(measurement, index) => (
								<option key={index} value={measurement}>
									{
										MeasurementUnit[
											measurement as keyof typeof MeasurementUnit
										]
									}
								</option>
							),
						)}
					</Select>
				</FormControl>
				<FormControl isRequired>
					<Input
						size="sm"
						placeholder={`Ingrediens ${ingredientIndex + 1}`}
						{...hookFormRegister(
							`${registerName}..formIngredientName` as const,
							{
								required: `Du måste ange namnet på ingrediensen ${
									ingredientIndex + 1
								}`,
							},
						)}
					/>
				</FormControl>
				<IconButton
					size="sm"
					aria-label="Delete Step"
					variant="ghost"
					borderRadius="full"
					icon={<Icon as={CloseRoundedIcon} boxSize="3" />}
					isDisabled={!canRemoveIngredient}
					onClick={() => {
						hookFormFields.remove(ingredientIndex);
					}}
				/>
			</HStack>
		</HStack>
	);
}

export default IngredientField;
