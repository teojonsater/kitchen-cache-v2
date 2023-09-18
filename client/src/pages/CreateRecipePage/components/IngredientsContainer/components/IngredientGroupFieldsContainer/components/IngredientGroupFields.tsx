/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import type RecipeForm from "../../../../../interfaces/RecipeForm";
import {
	Button,
	FormControl,
	HStack,
	Icon,
	IconButton,
	Input,
	VStack,
} from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useFieldArray } from "react-hook-form";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import IngredientField from "../../IngredientField";

interface Props {
	formIngredientGroupFields: any;
	hookFormRegister: any;
	hookFormControl: any;
	groupIndex: number;
}

function IngredientGroupFields({
	formIngredientGroupFields,
	hookFormRegister,
	hookFormControl,
	groupIndex,
}: Props) {
	const formIngredientGroupIngredientsFields = useFieldArray<RecipeForm>({
		control: hookFormControl,
		name: `formIngredientGroups.${groupIndex}.formIngredientGroupIngredients`,
	});
	return (
		<VStack align="stretch">
			<HStack>
				<FormControl>
					<Input
						placeholder={`Gruppnamn ${groupIndex + 1}`}
						{...hookFormRegister(
							`formIngredientGroups.${groupIndex}.formIngredientGroupName` as const,
						)}
					/>
				</FormControl>
				<IconButton
					size="sm"
					aria-label="Delete Step"
					variant="ghost"
					borderRadius="full"
					icon={<Icon as={CloseRoundedIcon} boxSize="4" />}
					onClick={() => {
						formIngredientGroupFields.remove(groupIndex);
					}}
				/>
			</HStack>
			{formIngredientGroupIngredientsFields.fields.map((field, index) => (
				<IngredientField
					key={field.id}
					ingredientIndex={index}
					hookFormFields={formIngredientGroupIngredientsFields}
					hookFormRegister={hookFormRegister}
					registerName={`formIngredientGroups.${groupIndex}.formIngredientGroupIngredients.${index}`}
					showArrow={index === 0}
					indent={index > 0}
					canRemoveIngredient={
						formIngredientGroupIngredientsFields.fields.length > 1
					}
				/>
			))}
			<Button
				maxW="fit-content"
				size="sm"
				colorScheme="teal"
				variant="ghost"
				ml="6"
				leftIcon={<Icon as={AddRoundedIcon} boxSize="4" />}
				onClick={() => {
					formIngredientGroupIngredientsFields.append({
						formIngredientName: "",
						formIngredientMeasurement: "-",
					});
				}}
			>
				Lägg till ingrediens
			</Button>
		</VStack>
	);
}

export default IngredientGroupFields;
