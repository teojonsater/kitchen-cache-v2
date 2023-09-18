import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import MeasurementUnit from "../measurements/MeasurementUnit";

const chilikyckling: RecipeObject = {
	id: "fde21cae-8641-41ef-8981-9c4eda3643b2",
	createdAt: new Date(),
	name: "Krämig sweet chilikyckling i ugn",
	desc: "Krämig, billig och god kyckling som görs i ugnen med smak från sweet chilisås. Lättlagad är ugnskycklingen också, när kålen ugnsbakas i samma form som kycklingen. Den krämiga såsen görs enkelt av mjölk, crème fraiche och sweet chilisås. Enkelt och gott! ",
	costPerServing: 38.54,
	servings: 4,
	cookingTime: 60,
	originalRecipe:
		"https://www.ica.se/recept/kramig-sweet-chilikyckling-i-ugn-729884/",
	image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_249991/cf_259/kramig_sweet_chilikyckling_i_ugn.jpg",
	steps: [
		"Tina kycklingen (om fryst används).",
		"Sätt ugnen på 200°C.",
		"Strimla vitkålen tunt och lägg i en ugnsform. Häll sojan över.",
		"Skär kycklingfiléerna i tre bitar på längden och stek i oljan i en stekpanna. Krydda med salt och peppar. Lägg kycklingen ovanpå kålen i ugnsformen.",
		"Blanda mjölken med majsstärkelsen och koka upp i en kastrull tillsammans med crème fraichen. Vispa ner sweet chili och smulad buljongtärning.",
		"Häll såsen över kycklingen och sätt in formen i ugnen ca 15 minuter eller tills kycklingen har en innertemperatur på 72°C.",
		"Serveringsförslag: Servera med ris och gärna en sallad. ",
	],
	ingredientGroups: [
		{
			ingredients: [
				{
					amount: 200,
					measurement: MeasurementUnit.G,
					name: "vitkål",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "japansk soja",
				},
				{
					amount: 600,
					measurement: MeasurementUnit.G,
					name: "kycklingfilé",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TBSP,
					name: "matolja",
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
				{
					amount: 1,
					measurement: MeasurementUnit.DL,
					name: "mjölk",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TSP,
					name: "majsstärkelse",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.DL,
					name: "crème fraiche",
				},
				{
					amount: 0.5,
					measurement: MeasurementUnit.DL,
					name: "sweet chilisås",
				},
				{
					amount: 0.5,
					measurement: MeasurementUnit.NONE,
					name: "kycklingbuljongtärningar",
				},
			],
		},
		{
			ingredients: [
				{
					amount: 4,
					measurement: MeasurementUnit.SERV,
					name: "ris",
				},
				{
					amount: 0,
					measurement: MeasurementUnit.NONE,
					name: "sallad",
				},
			],
			name: "Serveringsförslag",
		},
	],
};

export default chilikyckling;
