import MeasurementUnit from "./MeasurementUnit";

const otherMeasurements: MeasurementUnit[] = [
	MeasurementUnit.NONE,
	MeasurementUnit.PCS,
	MeasurementUnit.PACK,
	MeasurementUnit.SERV,
];

const weightMeasurements: MeasurementUnit[] = [
	MeasurementUnit.KG,
	MeasurementUnit.G,
	MeasurementUnit.MG,
	MeasurementUnit.OZ,
];

const volumeMeasurements: MeasurementUnit[] = [
	MeasurementUnit.L,
	MeasurementUnit.DL,
	MeasurementUnit.CL,
	MeasurementUnit.ML,
	MeasurementUnit.TBSP,
	MeasurementUnit.TSP,
	MeasurementUnit.KRM,
	MeasurementUnit.CUP,
	MeasurementUnit.FLOZ,
];

const getMeasurementCategory = (unit: MeasurementUnit) => {
	if (weightMeasurements.includes(unit)) return "weightMeasurements";
	if (volumeMeasurements.includes(unit)) return "volumeMeasurements";
	if (otherMeasurements.includes(unit)) return "otherMeasurements";
	throw new Error(`Unsupported unit: ${unit}`);
};

export default getMeasurementCategory;
