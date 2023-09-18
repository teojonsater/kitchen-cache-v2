import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import MeasurementUnit from "../measurements/MeasurementUnit";

const nudlar: RecipeObject = {
	id: "7f043d4d-7bf2-4836-b3a2-92677a01c45f",
	createdAt: new Date(),
	name: "Krämiga nudlar med röd curry och krispig färs",
	desc: "Nudlar med smakrik röd curry, krispig färs och pak choi i en krämig bas av kokosmjölk är en rätt med perfekt balans mellan sött, salt, syrligt och kryddigt! Servera med lime och sesamfrön.",
	costPerServing: 50.75,
	servings: 4,
	cookingTime: 45,
	originalRecipe:
		"https://www.ica.se/recept/kramiga-nudlar-med-rod-curry-och-krispig-fars-729677/",
	image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246230/cf_259/kramiga_nudlar_med_rod_curry_och_krispig_fars.jpg",
	steps: [
		"Fräs currypasten i olja ca 1 minut. Tillsätt kokosmjölken och låt koka ihop ca 5 minuter. Smaka av med salt.",
		"Fräs färsen i olja tills den får lite färg. Tillsätt vitlök, ingefära, soja och socker och låt koka in.",
		"Koka upp en kastrull med saltat vatten. Plocka bladen från pak choien och koka 1 minut, häll av. Koka nudlarna enligt anvisning på förpackningen. Häll av och rör ner nudlarna i såsen.",
		"Toppa nudlarna med färsen, pak choi, salladslök och sesamfrön.",
		"Serveringsförslag: Servera gärna med limeklyftor och toppa ev med färsk koriander.",
	],
	ingredientGroups: [
		{
			ingredients: [
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "röd currypaste",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TBSP,
					name: "olja",
				},
				{
					amount: 400,
					measurement: MeasurementUnit.ML,
					name: "kokosmjölk",
				},
				{
					amount: 0,
					measurement: MeasurementUnit.NONE,
					name: "salt",
				},
				{
					amount: 400,
					measurement: MeasurementUnit.G,
					name: "fläskfärs",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "olja",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.PCS,
					name: "vitlöksklyftor",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "ingefära",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "japansk soja",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TBSP,
					name: "socker",
				},
				{
					amount: 250,
					measurement: MeasurementUnit.G,
					name: "pak choi",
				},
				{
					amount: 200,
					measurement: MeasurementUnit.G,
					name: "äggnudlar",
				},
				{
					amount: 3,
					measurement: MeasurementUnit.PCS,
					name: "salladslök",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "sesamfrön",
				},
			],
		},
		{
			ingredients: [
				{
					amount: 0,
					measurement: MeasurementUnit.NONE,
					name: "limeklyftor",
				},
				{
					amount: 0,
					measurement: MeasurementUnit.NONE,
					name: "koriander",
				},
			],
			name: "Serveringsförslag",
		},
	],
};

export default nudlar;
