import dummyRecipes from "../utils/dummyRecipes";
import type WeekMenuDay from "../interfaces/weekmenu/WeekMenuDay";

const dummyWeekMenu: WeekMenuDay[] = [
	{
		day: "Måndag",
		menuRecipes: [
			{ recipe: dummyRecipes[0], menuServings: 7 },
			{ recipe: dummyRecipes[4], menuServings: 6 },
		],
	},
	{
		day: "Tisdag",
		menuRecipes: [{ recipe: dummyRecipes[3], menuServings: 9 }],
	},
	{
		day: "Onsdag",
		menuRecipes: [
			{ recipe: dummyRecipes[5], menuServings: 2 },
			{ recipe: dummyRecipes[7], menuServings: 6 },
		],
	},
	{ day: "Torsdag", menuRecipes: [] },
	{ day: "Fredag", menuRecipes: [] },
	{ day: "Lördag", menuRecipes: [] },
	{ day: "Söndag", menuRecipes: [] },
];

export default dummyWeekMenu;
