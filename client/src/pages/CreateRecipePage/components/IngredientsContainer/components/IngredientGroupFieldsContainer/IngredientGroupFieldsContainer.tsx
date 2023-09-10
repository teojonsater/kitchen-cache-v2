/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import type RecipeForm from "../../../../interfaces/RecipeForm";
import { Button, Icon, VStack } from "@chakra-ui/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import IngredientGroupFields from "./components/IngredientGroupFields";
import { useFieldArray } from "react-hook-form";

interface Props {
	hookFormControl: any;
	hookFormRegister: any;
}

function IngredientGroupFieldsContainer({
	hookFormControl,
	hookFormRegister,
}: Props) {
	const formIngredientGroupFields = useFieldArray<RecipeForm>({
		control: hookFormControl,
		name: "formIngredientGroups",
	});

	return (
		<VStack align="stretch">
			{formIngredientGroupFields.fields.map((field, index) => {
				return (
					<IngredientGroupFields
						key={field.id}
						groupIndex={index}
						formIngredientGroupFields={formIngredientGroupFields}
						hookFormRegister={hookFormRegister}
						hookFormControl={hookFormControl}
					/>
				);
			})}
			<Button
				maxW="fit-content"
				size="sm"
				colorScheme="teal"
				variant="ghost"
				leftIcon={<Icon as={AddRoundedIcon} boxSize="4" />}
				onClick={() => {
					formIngredientGroupFields.append({
						formIngredientGroupName: "",
						formIngredientGroupIngredients: [
							{
								formIngredientMeasurement: "-",
								formIngredientName: "",
							},
						],
					});
				}}
			>
				Lägg till ingrediensgrupp
			</Button>
		</VStack>
	);
}

export default IngredientGroupFieldsContainer;
