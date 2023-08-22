interface RecipeIngredient {
	name: string;
	amount: number;
	measurement:
		| "-"
		| "st"
		| "förp"
		| "port"
		| "kg"
		| "hg"
		| "g"
		| "mg"
		| "l"
		| "dl"
		| "cl"
		| "ml"
		| "msk"
		| "tsk"
		| "krm"
		| "cup"
		| "floz"
		| "oz";
}

export default RecipeIngredient;
