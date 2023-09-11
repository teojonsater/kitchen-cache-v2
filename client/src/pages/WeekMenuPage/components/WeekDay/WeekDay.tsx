import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import MenuSummaryCard from "./components/MenuSummaryCard";
import type WeekMenuDay from "../../interfaces/WeekMenuDay";
import AddRecipeBtn from "./components/AddRecipeBtn";
import type RecipeObject from "../../../../interfaces/recipe/RecipeObject";

interface Props {
	menu: WeekMenuDay;
	onAddRecipe: (day: string, addedRecipe: RecipeObject) => void;
	onRemoveRecipe: (day: string, indexToRemove: number) => void;
}

function WeekDay({ menu, onAddRecipe, onRemoveRecipe }: Props) {
	return (
		<VStack align="start">
			<Heading color="teal.700">{menu.day}</Heading>

			{menu.menuRecipes.map((menuRecipe, index) => (
				<MenuSummaryCard
					key={index}
					index={index}
					name={menuRecipe.recipe.name}
					image={menuRecipe.recipe.image}
					cookingTime={menuRecipe.recipe.cookingTime}
					costPerServing={menuRecipe.recipe.costPerServing}
					ingredientGroups={menuRecipe.recipe.ingredientGroups}
					menuServings={menuRecipe.menuServings}
					day={menu.day}
					onRemoveRecipe={onRemoveRecipe}
				/>
			))}

			<AddRecipeBtn onAddRecipe={onAddRecipe} day={menu.day} />
		</VStack>
	);
}

export default WeekDay;
