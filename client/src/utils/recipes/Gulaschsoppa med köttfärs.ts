import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import MeasurementUnit from "../measurements/MeasurementUnit";

const gulaschsoppa: RecipeObject = {
	id: "536067a0-a85f-4a4b-acc9-9257318404ed",
	createdAt: new Date(),
	name: "Gulaschsoppa med köttfärs",
	desc: "En riktigt matig och god gulaschsoppa med smak av köttfärs. Servera den rykande heta gulaschsoppan tillsammans med en rejäl klick gräddfil och njut av de goda smakerna!",
	costPerServing: 46.65,
	servings: 4,
	cookingTime: 30,
	originalRecipe:
		"https://www.ica.se/recept/gulaschsoppa-med-kottfars-712852/",
	image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_243153/cf_259/gulaschsoppa_med_kottfars.jpg",
	steps: [
		"Skala lök och potatis. Dela och kärna ur paprikan. Skär grönsakerna i tärningar.",
		"Fräs grönsaker och köttfärs i oljan i en gryta eller kastrull.",
		"Tillsätt vatten, köttbuljongtärning, krossade tomater och kummin. Koka sakta ca 10 minuter. Smaksätt med salt och peppar.",
		"Till servering: Servera soppan med gräddfil och gärna varmt vitlöksbröd.",
	],
	ingredientGroups: [
		{
			ingredients: [
				{
					amount: 1,
					measurement: MeasurementUnit.PCS,
					name: "gullök",
				},
				{
					amount: 320,
					measurement: MeasurementUnit.G,
					name: "potatis",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.PCS,
					name: "paprika",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "olja",
				},
				{
					amount: 500,
					measurement: MeasurementUnit.G,
					name: "köttfärs",
				},
				{
					amount: 6,
					measurement: MeasurementUnit.DL,
					name: "vatten",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.PCS,
					name: "köttbuljongtärningar",
				},
				{
					amount: 500,
					measurement: MeasurementUnit.G,
					name: "krossade tomater",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TSP,
					name: "kummin",
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
		},
		{
			ingredients: [
				{
					amount: 0,
					measurement: MeasurementUnit.NONE,
					name: "gräddfil",
				},
				{
					amount: 0,
					measurement: MeasurementUnit.NONE,
					name: "vitlöksbröd",
				},
			],
			name: "Till servering",
		},
	],
};

export default gulaschsoppa;
