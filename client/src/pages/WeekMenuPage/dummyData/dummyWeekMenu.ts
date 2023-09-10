import dummyRecipes from "../../../utils/dummyRecipes";
import type WeekMenu from "../interfaces/WeekMenu";

const dummyWeekMenu: WeekMenu = {
	mon: [
		{ recipe: dummyRecipes[0], servings: 4 },
		{ recipe: dummyRecipes[3], servings: 6 },
	],
	tue: [],
	wed: [{ recipe: dummyRecipes[7], servings: 10 }],
	thur: [],
	fri: [],
	sat: [],
	sun: [],
};

export default dummyWeekMenu;
