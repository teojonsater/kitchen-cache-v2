import type WeekMenuRecipe from "./WeekMenuRecipe";

interface WeekMenuDay {
	day: string;
	menuRecipes: WeekMenuRecipe[];
}

export default WeekMenuDay;
