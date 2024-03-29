﻿import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import MeasurementUnit from "../measurements/MeasurementUnit";

const flaskytterfile: RecipeObject = {
	id: "dfe6cc27-86bf-4e22-97d4-3314d433b6ac",
	createdAt: new Date(),
	name: "Fläskytterfilé i dragonsås med pressad potatis",
	desc: "Saftiga fläskfiléer serveras ikväll med en len dragonsås, pressad potatis och broccoli. Såsen har lite samma smaker som en bearnaisesås. Inte så pjåkigt alls en trött vardagkväll!",
	costPerServing: 47.94,
	servings: 4,
	cookingTime: 30,
	originalRecipe:
		"https://www.ica.se/recept/flaskytterfile-i-dragonsas-med-pressad-potatis-729517/",
	image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246458/cf_259/flaskytterfilé_i_dragonsas_med_pressad_potatis.jpg",
	steps: [
		"Skala och dela potatisen i mindre bitar. Koka potatisen.",
		"Skär broccolin i klyftor.  ",
		"Skär köttet i ca 1 cm tjocka skivor och stek dem i oljan i en stekpanna. Krydda med salt och peppar och lyft upp på ett fat.  ",
		"Blanda grädden och majsstärkelsen. Häll grädden, mjölken och smulad buljongtärning i stekpannan. Rör ner vinäger och dragon och låt sjuda ca 3 minuter under omrörning. Lägg tillbaka köttet och låt sjuda ytterligare 5 minuter.  ",
		"Koka broccolin i saltat vatten i 4 minuter.  ",
		"Pressa potatisen. ",
		"Servera köttet i såsen med broccoli och pressad potatis.",
	],
	ingredientGroups: [
		{
			ingredients: [
				{
					amount: 900,
					measurement: MeasurementUnit.G,
					name: "potatis",
				},
				{
					amount: 250,
					measurement: MeasurementUnit.G,
					name: "broccoli",
				},
				{
					amount: 650,
					measurement: MeasurementUnit.G,
					name: "fläskytterfilé",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TSP,
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
					amount: 2.5,
					measurement: MeasurementUnit.DL,
					name: "vispgrädde",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TSP,
					name: "majsstärkelse",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.DL,
					name: "mjölk",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.PCS,
					name: "köttbuljongtärningar",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TBSP,
					name: "vitvinsvinäger",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TSP,
					name: "torkad dragon",
				},
			],
		},
	],
};

export default flaskytterfile;
