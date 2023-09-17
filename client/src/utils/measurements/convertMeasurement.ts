import MeasurementUnit from "./MeasurementUnit";
import getMeasurementCategory from "./getMeasurementCategory";

function convertMeasurement(
	quantity: number,
	fromUnit: MeasurementUnit,
	toUnit: MeasurementUnit,
): number {
	const conversionTable: Record<MeasurementUnit, number> = {
		[MeasurementUnit.NONE]: 1,
		[MeasurementUnit.PCS]: 1,
		[MeasurementUnit.PACK]: 1,
		[MeasurementUnit.SERV]: 1,
		[MeasurementUnit.KG]: 1,
		[MeasurementUnit.G]: 1000,
		[MeasurementUnit.MG]: 1000000,
		[MeasurementUnit.OZ]: 35.27, // Approximate value for 1 ounce in grams
		[MeasurementUnit.L]: 1,
		[MeasurementUnit.DL]: 10,
		[MeasurementUnit.CL]: 100,
		[MeasurementUnit.ML]: 1000,
		[MeasurementUnit.TBSP]: 15000,
		[MeasurementUnit.TSP]: 5000,
		[MeasurementUnit.KRM]: 1000,
		[MeasurementUnit.CUP]: 4.23, // Approximate value for 1 cup in ml
		[MeasurementUnit.FLOZ]: 33.81, // Approximate value for 1 fluid ounce in ml
	};

	if (fromUnit === toUnit) {
		return quantity; // No conversion needed
	}

	if (getMeasurementCategory(fromUnit) !== getMeasurementCategory(toUnit)) {
		throw new Error("Units are not in the same category");
	}

	if (!(fromUnit in conversionTable) || !(toUnit in conversionTable)) {
		throw new Error("Unsupported units");
	}

	return quantity * (conversionTable[toUnit] / conversionTable[fromUnit]);
}
