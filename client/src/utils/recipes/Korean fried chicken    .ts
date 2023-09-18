import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import MeasurementUnit from "../measurements/MeasurementUnit";

const koreanFriedChicken: RecipeObject = {
	id: "b2445fa1-b165-4148-98eb-e678d7c1cc42",
	createdAt: new Date(),
	name: "Korean fried chicken    ",
	desc: "Korean fried chicken, även kallad chikin, är ett recept på koreansk kyckling som friteras och sedan doppas i en ljuvlig sås med honung, risvinäger och gochujang. Servera den friterade kycklingen med snabbpicklade grönsaker. Comfort food på koreanska!",
	costPerServing: 39.57,
	servings: 4,
	cookingTime: 60,
	originalRecipe: "https://www.ica.se/recept/korean-fried-chicken-727374/",
	image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_220805/cf_259/korean_fried_chicken____.jpg",
	steps: [
		"Picklade grönsaker: Blanda risvinäger, socker och salt tills sockret löses upp i en skål som även rymmer grönsakerna. Skala och strimla morot och rättika tunt. Skala och strimla rödlöken. Blanda ner grönsakerna i lagen. Låt stå 30 minuter.",
		"Sås: Skala och finhacka vitlöken och stek mjuk olja i en liten kastrull. Tillsätt övriga ingredienser och låt koka ihop 10–15 minuter utan lock till en klibbig sås. Ställ åt sidan.",
		"Frityrsmet: Vispa ihop alla ingredienser till en slät smet.",
		"Kyckling: Blanda majsstärkelse, vitlökspulver, gochugaru och salt i en bunke. ",
		"Skär varje kycklinglårfilé i 3 bitar. Vänd först kycklingen i majsstärkelsen och sedan i frityrsmeten så de täcks runtom. Vänd sedan en gång till i majsstärkelsen. ",
		"Värm oljan till 180°C i en stor kastrull.",
		"Fritera kycklingen i omgångar ca 10 minuter eller tills kycklingen är genomstekt och krispig. Lägg på galler eller hushållspapper och låt rinna av. Om du vill ha kycklingen extra krispig friterar du den en gång till.",
		"Till servering: Lägg kycklingen i en bunke och blanda med såsen så kycklingen täcks runt om, strö över sesamfrön och jordnötter.",
		"Servera genast med kokt ris och de picklade grönsakerna.",
	],
	ingredientGroups: [
		{
			ingredients: [
				{
					amount: 1,
					measurement: MeasurementUnit.DL,
					name: "risvinäger",
				},
				{
					amount: 3,
					measurement: MeasurementUnit.TBSP,
					name: "strösocker",
				},
				{
					amount: 0.5,
					measurement: MeasurementUnit.TSP,
					name: "salt",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.PCS,
					name: "morot",
				},
				{
					amount: 10,
					measurement: MeasurementUnit.G,
					name: "rättika",
				},
				{
					amount: 0.5,
					measurement: MeasurementUnit.PCS,
					name: "rödlök",
				},
			],
			name: "Snabbpicklade grönsaker",
		},
		{
			ingredients: [
				{
					amount: 4,
					measurement: MeasurementUnit.PCS,
					name: "vitlöksklyftor",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TBSP,
					name: "neutral olja",
				},
				{
					amount: 1.5,
					measurement: MeasurementUnit.TBSP,
					name: "japansk soja",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "gochujang",
				},
				{
					amount: 0.5,
					measurement: MeasurementUnit.DL,
					name: "honung",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "risvinäger",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.DL,
					name: "farinsocker",
				},
				{
					amount: 3,
					measurement: MeasurementUnit.TBSP,
					name: "ketchup",
				},
			],
			name: "Sås",
		},
		{
			ingredients: [
				{
					amount: 1,
					measurement: MeasurementUnit.DL,
					name: "vetemjöl",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TSP,
					name: "majsstärkelse",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.KRM,
					name: "bakpulver",
				},
				{
					amount: 3,
					measurement: MeasurementUnit.DL,
					name: "iskallt vatten",
				},
			],
			name: "Frityrsmet",
		},
		{
			ingredients: [
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "majsstärkelse",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TSP,
					name: "vitlökspulver",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TSP,
					name: "gochugaru",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TSP,
					name: "salt",
				},
				{
					amount: 600,
					measurement: MeasurementUnit.G,
					name: "kycklinglårfilé",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.L,
					name: "frityrolja",
				},
			],
			name: "Kyckling",
		},
		{
			ingredients: [
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "sesamfrön",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.DL,
					name: "jordnötter",
				},
				{
					amount: 4,
					measurement: MeasurementUnit.SERV,
					name: "jasmineris",
				},
			],
			name: "Till servering",
		},
	],
};

export default koreanFriedChicken;
