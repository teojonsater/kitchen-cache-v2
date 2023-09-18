import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import MeasurementUnit from "../measurements/MeasurementUnit";

const ciderkyckling: RecipeObject = {
	id: "b63613df-ace8-42e1-9bf4-865eaba5298a",
	createdAt: new Date(),
	name: "Ciderkyckling med dragon och ris",
	desc: "En härlig ciderkyckling som sprider en ljuvlig doft medan den tillagas. Lök, kyckling och äpple bryns i olja i en stor gryta. För att få den krämiga konsistensen tillsätter du grädde som får sjuda ihop med äppelcider, buljongtärning och dragon. Servera denna mustiga gryta med nykokt ris och tomathalvor. ",
	costPerServing: 57.95,
	servings: 4,
	cookingTime: 30,
	originalRecipe:
		"https://www.ica.se/recept/ciderkyckling-med-dragon-och-ris-718263/",
	image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_105176/cf_259/ciderkyckling_med_dragon_och_ris.jpg",
	steps: [
		"Koka riset enligt anvisningen på förpackningen.",
		"Skär kycklingen i strimlor. Skala löken och skär den och äpplet i klyftor. Skär bort kärnhuset från klyftorna på äpplet.",
		"Bryn kyckling, lök och äpple i oljan i en stor gryta. Krydda med salt och peppar.",
		"Blanda grädden med majsstärkelsen. Häll ner grädden, cider, buljongtärning och dragon i kastrullen. Låt sjuda ca 10 minuter. Smaka av med vinäger, salt och peppar.",
		"Dela tomaterna i halvor.",
		"Servera grytan med ris och tomater.",
	],
	ingredientGroups: [
		{
			ingredients: [
				{
					amount: 4,
					measurement: MeasurementUnit.SERV,
					name: "ris",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.KG,
					name: "kycklingfilé",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.PCS,
					name: "rödlök",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.PCS,
					name: "äpple",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TBSP,
					name: "olja",
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
					amount: 2,
					measurement: MeasurementUnit.DL,
					name: "vispgrädde",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TSP,
					name: "majsstärkelse",
				},
				{
					amount: 3,
					measurement: MeasurementUnit.DL,
					name: "äppelcider",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.PCS,
					name: "kycklingbuljongtärningar",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TSP,
					name: "dragon",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TSP,
					name: "vitvinsvinäger",
				},
				{
					amount: 250,
					measurement: MeasurementUnit.G,
					name: "körsbärstomater",
				},
			],
		},
	],
};

export default ciderkyckling;
