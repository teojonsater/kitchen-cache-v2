import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import MeasurementUnit from "../measurements/MeasurementUnit";

const carbonara: RecipeObject = {
	id: "751ad9a1-164a-49f1-ab4a-7ddb245dbabf",
	createdAt: new Date(),
	name: "Krämig carbonara",
	desc: "En klassisk, krämig carbonara med parmesanost, ruccola och den finaste svartpepparn – Tellicherry! Lika god en fredagkväll tillsammans med ett gott glas vin som till lyxlunch på helgen.",
	costPerServing: 40.65,
	servings: 4,
	cookingTime: 30,
	originalRecipe: "https://www.ica.se/recept/kramig-carbonara-722780/",
	image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_168478/cf_259/kramig_carbonara.jpg",
	steps: [
		"Koka spaghetti enligt anvisningarna på förpackningen.",
		"Stek baconbitarna knapriga i en stekpanna.",
		"Vispa ihop ägg, grädde, parmesanost, salt och svartpeppar i en bunke.",
		"Häll av pastan och häll tillbaka den i kastrullen, vänd ner äggblandningen och det stekta baconet. Rör runt på svag värme till en krämig pasta.",
		"Till servering: Lägg upp på ett fat tillsammans med ruccolasalladen. Servera med en extra äggula och dra några extra tag med pepparkvarnen över.",
	],
	ingredientGroups: [
		{
			ingredients: [
				{
					amount: 500,
					measurement: MeasurementUnit.G,
					name: "spaghetti",
				},
				{
					amount: 280,
					measurement: MeasurementUnit.G,
					name: "bacon",
				},
				{
					amount: 4,
					measurement: MeasurementUnit.PCS,
					name: "ägg",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.DL,
					name: "vispgrädde",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.DL,
					name: "riven parmesan",
				},
				{
					amount: 0.5,
					measurement: MeasurementUnit.TSP,
					name: "salt",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.KRM,
					name: "svartpeppar",
				},
			],
		},
		{
			ingredients: [
				{
					amount: 70,
					measurement: MeasurementUnit.G,
					name: "ruccola",
				},
				{
					amount: 4,
					measurement: MeasurementUnit.PCS,
					name: "äggulor",
				},
			],
			name: "Till servering",
		},
	],
};

export default carbonara;
