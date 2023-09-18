import React from "react";
import { ListItem } from "@chakra-ui/react";
import MeasurementUnit from "../../../../../../utils/measurements/MeasurementUnit";

interface Props {
	amount: number;
	measurement: MeasurementUnit;
	ingredient: string;
	originalServings: number;
	alteredServings: number;
}

function IngredientItem({
	amount,
	measurement,
	ingredient,
	originalServings,
	alteredServings,
}: Props) {
	let changedServingAmount =
		Math.round(
			((amount / originalServings) * alteredServings + Number.EPSILON) *
				100,
		) / 100;

	return (
		<ListItem>
			<b>
				{amount > 0 && changedServingAmount}{" "}
				{measurement !== MeasurementUnit.NONE && measurement}
			</b>{" "}
			{ingredient}
		</ListItem>
	);
}

export default IngredientItem;
