import React, { useState } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import SelectedWeekController from "./components/SelectedWeekController";
import getCurrentWeekNumber from "./utils/getCurrentWeekNumber";

function WeekmenuPage() {
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
		<VStack spacing="8" align="start" p="8">
			<Heading as="h1" size="2xl">
				Veckomeny
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

export default WeekmenuPage;
