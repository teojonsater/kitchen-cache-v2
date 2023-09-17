type MetricUnit = "ml" | "dl" | "g";

function convertToMetric(
	amount: number,
	imperialUnit: string,
): [number, MetricUnit] | undefined {
	let metricAmount: number;
	let metricUnit: MetricUnit | undefined = undefined;

	switch (imperialUnit) {
		case "cup":
			metricAmount =
				Math.round((amount * 2.36588 + Number.EPSILON) * 100) / 100; // 1 cup = 236.588 ml
			metricUnit = "dl";
			break;
		case "floz":
			metricAmount =
				Math.round((amount * 29.5735 + Number.EPSILON) * 100) / 100; // 1 fl oz = 29.5735 ml
			metricUnit = "ml";
			break;
		case "oz":
			metricAmount =
				Math.round((amount * 28.3495 + Number.EPSILON) * 100) / 100; // 1 oz = 28.3495 g
			metricUnit = "g";
			break;
		default:
			return undefined; // Invalid input unit
	}

	return [metricAmount, metricUnit];
}

export { convertToMetric };
