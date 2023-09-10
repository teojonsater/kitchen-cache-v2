/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import type RecipeForm from "../../../../interfaces/RecipeForm";
import { Button, Icon, VStack } from "@chakra-ui/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import IngredientField from "../IngredientField";
import { useFieldArray } from "react-hook-form";

interface Props {
	hookFormControl: any;
	hookFormRegister: any;
}

function IngredientFieldsContainer({
	hookFormControl,
	hookFormRegister,
}: Props) {
	const formIngredientFields = useFieldArray<RecipeForm>({
		control: hookFormControl,
		name: "formIngredients",
	});

	return (
		<VStack align="stretch">
			{formIngredientFields.fields.map((field, index) => (
				<IngredientField
					key={field.id}
					ingredientIndex={index}
					hookFormFields={formIngredientFields}
					hookFormRegister={hookFormRegister}
					registerName={`formIngredients.${index}`}
				/>
			))}
			<Button
				maxW="fit-content"
				size="sm"
				colorScheme="teal"
				variant="ghost"
				leftIcon={<Icon as={AddRoundedIcon} boxSize="4" />}
				onClick={() => {
					formIngredientFields.append({
						formIngredientAmount: undefined,
						formIngredientMeasurement: "-",
						formIngredientName: "",
					});
				}}
			>
				Lägg till ingrediens
			</Button>
		</VStack>
	);
}

export default IngredientFieldsContainer;
