import React from "react";
import { ListItem } from "@chakra-ui/react";
import { convertToMetric } from "../../../../../../utils/measurements";

interface Props {
	amount: number;
	measurement: string;
	ingredient: string;
	originalServings: number;
	alteredServings: number;
	useMetric: boolean;
}

function IngredientItem({
	amount,
	measurement,
	ingredient,
	originalServings,
	alteredServings,
	useMetric,
}: Props) {
	let changedServingAmount =
		Math.round(
			((amount / originalServings) * alteredServings + Number.EPSILON) *
				100,
		) / 100;
	let changedServingMeasurement = measurement;

	if (useMetric) {
		// Convert to metric
		const amountMeasurement = convertToMetric(
			changedServingAmount,
			measurement,
		);

		if (amountMeasurement) {
			changedServingAmount = amountMeasurement[0];
			changedServingMeasurement = amountMeasurement[1];
		}
	}

	return (
		<ListItem>
			<b>
				{amount > 0 && changedServingAmount}{" "}
				{measurement != "-" && changedServingMeasurement}
			</b>{" "}
			{ingredient}
		</ListItem>
	);
}

export default IngredientItem;
