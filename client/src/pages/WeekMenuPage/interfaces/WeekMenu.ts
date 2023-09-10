import type WeekMenuRecipe from "./WeekMenuRecipe";

interface WeekMenu {
	mon: WeekMenuRecipe[];
	tue: WeekMenuRecipe[];
	wed: WeekMenuRecipe[];
	thur: WeekMenuRecipe[];
	fri: WeekMenuRecipe[];
	sat: WeekMenuRecipe[];
	sun: WeekMenuRecipe[];
}

export default WeekMenu;
