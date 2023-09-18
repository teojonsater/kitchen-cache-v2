import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import MeasurementUnit from "../measurements/MeasurementUnit";

const korvgryta: RecipeObject = {
	id: "5c4e2f97-8669-4fc8-951a-a77eeea7083f",
	createdAt: new Date(),
	name: "Korvgryta med bönor och pesto",
	desc: "Snabb och lättlagad korvgryta som lagas av falukorv, krossade tomater, stora vita bönor och makaroner. I korvgrytan ryms också både morötter och lök och den kryddas med basilikapesto. Korvgryta är perfekt att laga till en snabb middag, men passar också att ha i matlådan.",
	costPerServing: 56.43,
	servings: 4,
	cookingTime: 30,
	originalRecipe:
		"https://www.ica.se/recept/korvgryta-med-bonor-och-pesto-729886/",
	image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_249997/cf_259/korvgryta_med_bonor_och_pesto.jpg",
	steps: [
		"Skala morötter, lök och vitlök. Hacka löken.",
		"Skär morötter och korv i ca 2 x 2 cm stora bitar.",
		"Koka upp buljongen tillsammans med lök, morötter, pressad vitlök och rosmarin. Koka sakta ca 10 minuter.",
		"Häll bönorna i en sil, spola dem i kallt vatten och låt rinna av.",
		"Tillsätt bönor, pasta och korv i grytan. Koka enligt tidsanvisningen på pastapaketet.",
		"Rör ner peston i soppan och smaka av salt och peppar.",
		"Serveringsförslag: Servera gärna grytan med bröd.",
	],
	ingredientGroups: [
		{
			ingredients: [
				{
					amount: 100,
					measurement: MeasurementUnit.G,
					name: "morot",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.PCS,
					name: "gullök",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.PCS,
					name: "vitlöksklyftor",
				},
				{
					amount: 400,
					measurement: MeasurementUnit.G,
					name: "falukorv",
				},
				{
					amount: 10,
					measurement: MeasurementUnit.DL,
					name: "grönsaksbuljong",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.TSP,
					name: "rosmarin",
				},
				{
					amount: 400,
					measurement: MeasurementUnit.G,
					name: "kokta vita bönor",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.DL,
					name: "makaroner",
				},
				{
					amount: 3,
					measurement: MeasurementUnit.TBSP,
					name: "basilikapesto",
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
					name: "bröd",
				},
			],
			name: "Serveringsförslag",
		},
	],
};

export default korvgryta;
