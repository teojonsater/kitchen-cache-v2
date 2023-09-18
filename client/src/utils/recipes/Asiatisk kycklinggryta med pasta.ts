import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import MeasurementUnit from "../measurements/MeasurementUnit";

const kycklingGryta: RecipeObject = {
	id: "82991127-65c9-4c41-8bc8-002c737cbce8",
	createdAt: new Date(),
	name: "Asiatisk kycklinggryta med pasta",
	desc: "Härligt smakrik kycklinggryta som görs på kycklingfärs och mustiga kryddor. Hela hemligheten är såsen med hoisinsås, jordnötssmör, sesamolja och mirin. Precis innan servering rörs spenat ner i grytan, som allra helst serveras med pastasorten fettuccine.",
	costPerServing: 45.57,
	servings: 6,
	cookingTime: 45,
	originalRecipe:
		"https://www.ica.se/recept/asiatisk-kycklinggryta-med-pasta-729921/",
	image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_250081/cf_259/asiatisk_kycklinggryta_med_pasta.jpg",
	steps: [
		"Sås: Rör ihop hoisinsås, jordnötssmör, sesamolja, mirin och soja.",
		"Sätt på en kastrull med vatten till pastan. ",
		"Ansa och skiva champinjonerna. Skala och hacka lök och vitlök fint. Skala och riv ingefäran fint på ett rivjärn. Hacka gräslöken grovt. ",
		"Fräs champinjonerna i oljan i en stor gryta ca 2 minuter. ",
		"Lägg i och dela kycklingfärsen. Fräs ytterligare 2 minuter. Tillsätt lök, vitlök, ingefära och chiliflakes. Fräs ytterligare 2 minuter. ",
		"Rör ner såsen i grytan och sjud på svag värme i 10 minuter. Smaka av med salt. ",
		"Koka pastan enligt anvisningen på förpackningen. ",
		"Späd eventuellt kycklinggrytan med 1-2 dl pastavatten (för 6 port). ",
		"Rör ner pasta och spenat i grytan och toppa med gräslök. ",
	],
	ingredientGroups: [
		{
			ingredients: [
				{
					amount: 1,
					measurement: MeasurementUnit.TBSP,
					name: "hoisinsås",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.DL,
					name: "jordnötssmör",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "sesamolja",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "mirin",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "japansk soja",
				},
			],
			name: "Sås",
		},
		{
			ingredients: [
				{
					amount: 250,
					measurement: MeasurementUnit.G,
					name: "champinjoner",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.PCS,
					name: "gullök",
				},
				{
					amount: 6,
					measurement: MeasurementUnit.PCS,
					name: "vitlöksklyftor",
				},
				{
					amount: 4,
					measurement: MeasurementUnit.TBSP,
					name: "färsk ingefära",
				},
				{
					amount: 20,
					measurement: MeasurementUnit.G,
					name: "gräslök",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "neutral rapsolja",
				},
				{
					amount: 800,
					measurement: MeasurementUnit.G,
					name: "kycklingfärs",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TBSP,
					name: "chiliflakes",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TSP,
					name: "salt",
				},
			],
		},
		{
			ingredients: [
				{
					amount: 250,
					measurement: MeasurementUnit.G,
					name: "fettuchine",
				},
				{
					amount: 65,
					measurement: MeasurementUnit.G,
					name: "babyspenat",
				},
			],
		},
	],
};

export default kycklingGryta;
