import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import MeasurementUnit from "../measurements/MeasurementUnit";

const chickenFriedRice: RecipeObject = {
	id: "5f52befe-60fd-47fe-86ab-61b1c7402df4",
	createdAt: new Date(),
	name: "Chicken fried rice",
	desc: "En smakrik asiatisk rätt som går att äta med både pinnar och sked. Kycklingen och grönsakerna steks för sig i en del olja, innan det kokta riset hälls i en tom stekpanna. Ett ägg över det får riset att bli krämigt och en perfekt komponent till de övriga ingredienserna!",
	costPerServing: 46.86,
	servings: 4,
	cookingTime: 45,
	originalRecipe: "https://www.ica.se/recept/chicken-fried-rice-724424/",
	image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_186709/cf_259/chicken_fried_rice.jpg",
	steps: [
		"Koka riset enligt anvisning på förpackningen.",
		"Skala och dela morötterna på längden och skiva dem.",
		"Stek kycklingen i hälften av oljan i en stor stekpanna. Salta och peppra. Lägg upp på en tallrik.",
		"Stek morötter, haricots verts och pressad vitlök i lite av den resterande oljan. Salta och peppra. Ta upp på en tallrik.",
		"Stek riset i resten av oljan och knäck i äggen och rör runt. Krydda med sweet chilisås och soja. Blanda kycklingen med grönsaker och riset.",
		"Strö över sesamfrö vid servering.",
	],
	ingredientGroups: [
		{
			ingredients: [
				{
					amount: 4,
					measurement: MeasurementUnit.SERV,
					name: "ris",
				},
			],
		},
		{
			ingredients: [
				{
					amount: 3,
					measurement: MeasurementUnit.PCS,
					name: "morot",
				},
				{
					amount: 600,
					measurement: MeasurementUnit.G,
					name: "kycklingfilé",
				},
				{
					amount: 2,
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
					amount: 150,
					measurement: MeasurementUnit.G,
					name: "haricots verts",
				},
				{
					amount: 1,
					measurement: MeasurementUnit.PCS,
					name: "vitlöksklyftor",
				},
				{
					amount: 4,
					measurement: MeasurementUnit.PCS,
					name: "ägg",
				},
				{
					amount: 3,
					measurement: MeasurementUnit.TBSP,
					name: "sweet chilisås",
				},
				{
					amount: 3,
					measurement: MeasurementUnit.TBSP,
					name: "japansk soja",
				},
				{
					amount: 2,
					measurement: MeasurementUnit.TBSP,
					name: "sesamfrön",
				},
			],
		},
	],
};

export default chickenFriedRice;
