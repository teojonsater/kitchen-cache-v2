import React from "react";
import { Td, Tr } from "@chakra-ui/react";
import type RecipeIngredient from "../../../../interfaces/recipe/RecipeIngredient";
import MeasurementUnit from "../../../../utils/measurements/MeasurementUnit";

interface Props {
	weekMenuIngredient: RecipeIngredient;
}

function TableRow({ weekMenuIngredient }: Props) {
	return (
		<Tr>
			<Td fontWeight="bold">
				{weekMenuIngredient.amount !== 0 && weekMenuIngredient.amount}{" "}
				{weekMenuIngredient.measurement !== MeasurementUnit.NONE &&
					weekMenuIngredient.measurement}
			</Td>
			<Td>{weekMenuIngredient.name}</Td>
			<Td isNumeric>54.90 kr</Td>
		</Tr>
	);
}

export default TableRow;
