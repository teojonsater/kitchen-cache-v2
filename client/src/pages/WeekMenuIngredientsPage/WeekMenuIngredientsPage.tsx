import React, { useState } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import getCurrentWeekNumber from "../../utils/getCurrentWeekNumber";
import SelectedWeekController from "../../components/SelectedWeekController";
import IngredientsTable from "./components/IngredientsTable";
import dummyWeekMenu from "../../dummyData/dummyWeekMenu";
import type WeekMenuDay from "../../interfaces/weekmenu/WeekMenuDay";
import type RecipeIngredient from "../../interfaces/recipe/RecipeIngredient";
import bundleIngredients from "../../utils/measurements/bundleIngredients";

function WeekMenuIngredientsPage() {
	const currentWeekNumber: number = getCurrentWeekNumber();

	const [currentWeekMenuIngredients] = useState<RecipeIngredient[]>(
		bundleIngredients(dummyWeekMenu),
	);

	const [selectedWeekNumber, setSelectedWeekNumber] =
		useState<number>(currentWeekNumber);

	const handleSelectedWeekNumberDecrease = () => {
		setSelectedWeekNumber((prevWeekNumber) =>
			prevWeekNumber == 1 ? 52 : prevWeekNumber - 1,
		);
	};

	const handleSelectedWeekNumberIncrease = () => {
		setSelectedWeekNumber((prevWeekNumber) =>
			prevWeekNumber == 52 ? 1 : prevWeekNumber + 1,
		);
	};

	const handleBackToCurrentWeekBtnClick = () => {
		setSelectedWeekNumber(currentWeekNumber);
	};

	console.log(currentWeekMenuIngredients);

	return (
		<VStack spacing="8" align="stretch" p="8">
			<Heading as="h1" size="2xl">
				Inköpslista
			</Heading>
			<SelectedWeekController
				onSelectedWeekNumberDecrease={handleSelectedWeekNumberDecrease}
				onSelectedWeekNumberIncrease={handleSelectedWeekNumberIncrease}
				onBackToCurrentWeekBtnClick={handleBackToCurrentWeekBtnClick}
				weekNumber={selectedWeekNumber}
				currentWeekNumber={currentWeekNumber}
			/>
			<IngredientsTable
				weekMenuIngredients={currentWeekMenuIngredients}
			/>
		</VStack>
	);
}

export default WeekMenuIngredientsPage;
