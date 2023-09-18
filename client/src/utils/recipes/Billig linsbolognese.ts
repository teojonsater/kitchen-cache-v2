import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import MeasurementUnit from "../measurements/MeasurementUnit";

const linsbolognese: RecipeObject = {
	id: "a61298b0-2834-4497-be60-e27b55c6a4bc",
	createdAt: new Date(),
	name: "Billig linsbolognese",
	desc: "Här är receptet som ger dig många portioner av en riktigt smakrik linsbolognese till en billig peng. Morötter, lök och krossade tomater är basen och naturligtvis linser. Använd färdigkokta så går bolognesen fort att göra. Linssåsen går utmärkt att frysa in och ta fram i omgångar till middagar eller kanske matlådor. ",
	costPerServing: 30.86,
	servings: 10,
	cookingTime: 45,
	originalRecipe: "https://www.ica.se/recept/billig-linsbolognese-729888/",
	image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_250003/cf_259/billig_linsbolognese.jpg",
	steps: [
		"Linsbolognese: Skala lök, vitlök, morötter. Hacka lök och vitlök, riv morötterna grovt på ett rivjärn.",
		"Bryn grönsakerna i oljan i en gryta. Rör ner tomatpuré och kryddor och låt det fräsa med någon minut. Tillsätt krossade tomater, smulade buljongtärningar, soja och vatten. Koka sakta ca 20 minuter.",
		"Koka pastan enligt anvisning på förpackningen.",
		"Linsbolognese: Häll linserna i en sil, spola dem i kallt vatten och låt rinna av.",
		"Tillsätt linserna i såsen, koka sakta ca 5 minuter. Smaka av med salt och peppar.",
		"Servera linsbolognesen med pasta.",
	],
	ingredientGroups: [
		{
			ingredients: [
				{
					amount: 3,
					measurement: MeasurementUnit.PCS,
					name: "gullök",
				},
				{
					amount: 3,
					measurement: MeasurementUnit.PCS,
					name: "vitlöksklyftor",
				},
				{
					amount: 100,
					measurement: MeasurementUnit.G,
					name: "morot",
				},
				{
					amount: 4,
					measurement: MeasurementUnit.TBSP,
					name: "matolja",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.DL,
					name: "tomatpuré",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TBSP,
					name: "rosmarin",
				},
				{
					amount: 500,
					measurement: MeasurementUnit.G,
					name: "krossade tomater",
				},
				{
					amount: 4,
					measurement: MeasurementUnit.PCS,
					name: "grönsaksbuljongtärningar",
				},
				{
					amount: 3,
					measurement: MeasurementUnit.TBSP,
					name: "japansk soja",
				},
				{
					amount: 6,
					measurement: MeasurementUnit.DL,
					name: "vatten",
				},
				{
					amount: 500,
					measurement: MeasurementUnit.G,
					name: "kokta linser",
				},
				{
					amount: 0,
					measurement: MeasurementUnit.NONE,
					name: "salt",
				},
				{
					amount: 0,
					measurement: MeasurementUnit.NONE,
					name: "svartpeppar",
				},
			],
			name: "Linsbolognese",
		},
		{
			ingredients: [
				{
					amount: 10,
					measurement: MeasurementUnit.SERV,
					name: "penne",
				},
			],
		},
	],
};

export default linsbolognese;
