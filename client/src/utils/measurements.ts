import MeasurementUnit from "./measurements/MeasurementUnit";

type MetricUnit = MeasurementUnit.ML | MeasurementUnit.DL | MeasurementUnit.G;

function convertToMetric(
	amount: number,
	imperialUnit: MeasurementUnit,
): [number, MetricUnit] | undefined {
	let metricAmount: number;
	let metricUnit: MetricUnit | undefined = undefined;

	switch (imperialUnit) {
		case MeasurementUnit.CUP:
			metricAmount =
				Math.round((amount * 2.36588 + Number.EPSILON) * 100) / 100; // 1 cup = 236.588 ml
			metricUnit = MeasurementUnit.DL;
			break;
		case MeasurementUnit.FLOZ:
			metricAmount =
				Math.round((amount * 29.5735 + Number.EPSILON) * 100) / 100; // 1 fl oz = 29.5735 ml
			metricUnit = MeasurementUnit.ML;
			break;
		case MeasurementUnit.OZ:
			metricAmount =
				Math.round((amount * 28.3495 + Number.EPSILON) * 100) / 100; // 1 oz = 28.3495 g
			metricUnit = MeasurementUnit.G;
			break;
		default:
			return undefined; // Invalid input unit
	}

	return [metricAmount, metricUnit];
}

export { convertToMetric };
