import React, { useState } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import getCurrentWeekNumber from "../../utils/getCurrentWeekNumber";
import SelectedWeekController from "../../components/SelectedWeekController";

function WeekMenuIngredientsPage() {
	const currentWeekNumber: number = getCurrentWeekNumber();

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
		</VStack>
	);
}

export default WeekMenuIngredientsPage;
