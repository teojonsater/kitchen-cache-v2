import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { Button, HStack, Heading, VStack } from "@chakra-ui/react";
import SelectedWeekController from "../../components/SelectedWeekController";
import getCurrentWeekNumber from "../../utils/getCurrentWeekNumber";
import WeekDay from "./components/WeekDay";
import dummyWeekMenu from "../../dummyData/dummyWeekMenu";
import type WeekMenuDay from "../../interfaces/weekmenu/WeekMenuDay";
import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import type WeekMenuRecipe from "../../interfaces/weekmenu/WeekMenuRecipe";

function WeekMenuPage() {
	const currentWeekNumber: number = getCurrentWeekNumber();

	const [selectedWeekNumber, setSelectedWeekNumber] =
		useState<number>(currentWeekNumber);

	const [currentWeekMenu, setCurrentWeekMenu] =
		useState<WeekMenuDay[]>(dummyWeekMenu);

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

	const handleAddRecipe = (day: string, addedRecipe: RecipeObject) => {
		const dayIndex = currentWeekMenu.findIndex(
			(weekMenu) => weekMenu.day === day,
		);

		const updatedWeekMenu = [...currentWeekMenu];
		const updatedDay = { ...updatedWeekMenu[dayIndex] };

		const newMenuRecipe: WeekMenuRecipe = {
			recipe: addedRecipe,
			menuServings: addedRecipe.servings,
		};

		updatedDay.menuRecipes.push(newMenuRecipe);
		updatedWeekMenu[dayIndex] = updatedDay;

		setCurrentWeekMenu(updatedWeekMenu);
	};

	const handleRemoveRecipe = (day: string, indexToRemove: number) => {
		const dayIndex = currentWeekMenu.findIndex(
			(weekMenu) => weekMenu.day === day,
		);

		const updatedWeekMenu = [...currentWeekMenu];
		const updatedDay = { ...updatedWeekMenu[dayIndex] };

		updatedDay.menuRecipes.splice(indexToRemove, 1);

		updatedWeekMenu[dayIndex] = updatedDay;

		setCurrentWeekMenu(updatedWeekMenu);
	};

	const handleMenuServingsChange = (
		day: string,
		indexToChange: number,
		value: number,
	) => {
		const dayIndex = currentWeekMenu.findIndex(
			(weekMenu) => weekMenu.day === day,
		);

		const updatedWeekMenu = [...currentWeekMenu];
		const updatedDay = { ...updatedWeekMenu[dayIndex] };

		updatedDay.menuRecipes[indexToChange].menuServings = value;

		updatedWeekMenu[dayIndex] = updatedDay;

		setCurrentWeekMenu(updatedWeekMenu);
	};

	return (
		<VStack spacing="8" align="stretch" p="8">
			<Heading as="h1" size="2xl">
				Veckomeny
			</Heading>
			<HStack justify="space-between">
				<SelectedWeekController
					onSelectedWeekNumberDecrease={
						handleSelectedWeekNumberDecrease
					}
					onSelectedWeekNumberIncrease={
						handleSelectedWeekNumberIncrease
					}
					onBackToCurrentWeekBtnClick={
						handleBackToCurrentWeekBtnClick
					}
					weekNumber={selectedWeekNumber}
					currentWeekNumber={currentWeekNumber}
				/>
				<Button colorScheme="teal">Spara</Button>
			</HStack>

			{currentWeekMenu.map((weekMenuDay, index) => (
				<WeekDay
					key={index}
					menu={weekMenuDay}
					onAddRecipe={handleAddRecipe}
					onRemoveRecipe={handleRemoveRecipe}
					onMenuServingsChange={handleMenuServingsChange}
				/>
			))}

			<Button
				onClick={() => {
					console.log(currentWeekMenu);
				}}
			>
				Skriv ut data
			</Button>
		</VStack>
	);
}

export default WeekMenuPage;
