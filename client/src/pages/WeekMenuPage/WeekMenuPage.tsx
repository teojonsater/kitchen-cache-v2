import React, { useState } from "react";
import {
	Button,
	HStack,
	Heading,
	Icon,
	IconButton,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Text,
	VStack,
} from "@chakra-ui/react";
import SelectedWeekController from "./components/SelectedWeekController";
import getCurrentWeekNumber from "./utils/getCurrentWeekNumber";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SummaryCard from "./components/SummaryCard";

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

			<VStack align="start">
				<Heading color="teal.700">Måndag</Heading>
				<SummaryCard />
				<Button
					variant="ghost"
					colorScheme="teal"
					leftIcon={<Icon as={AddRoundedIcon} />}
				>
					Lägg till recept
				</Button>
			</VStack>

			<VStack align="start">
				<Heading color="teal.700">Tisdag</Heading>
				<Button
					variant="ghost"
					colorScheme="teal"
					leftIcon={<Icon as={AddRoundedIcon} />}
				>
					Lägg till recept
				</Button>
			</VStack>

			<VStack align="start">
				<Heading color="teal.700">Onsdag</Heading>
				<Button
					variant="ghost"
					colorScheme="teal"
					leftIcon={<Icon as={AddRoundedIcon} />}
				>
					Lägg till recept
				</Button>
			</VStack>

			<VStack align="start">
				<Heading color="teal.700">Torsdag</Heading>
				<Button
					variant="ghost"
					colorScheme="teal"
					leftIcon={<Icon as={AddRoundedIcon} />}
				>
					Lägg till recept
				</Button>
			</VStack>

			<VStack align="start">
				<Heading color="teal.700">Fredag</Heading>
				<Button
					variant="ghost"
					colorScheme="teal"
					leftIcon={<Icon as={AddRoundedIcon} />}
				>
					Lägg till recept
				</Button>
			</VStack>

			<VStack align="start">
				<Heading color="teal.700">Lördag</Heading>
				<Button
					variant="ghost"
					colorScheme="teal"
					leftIcon={<Icon as={AddRoundedIcon} />}
				>
					Lägg till recept
				</Button>
			</VStack>

			<VStack align="start">
				<Heading color="teal.700">Söndag</Heading>
				<Button
					variant="ghost"
					colorScheme="teal"
					leftIcon={<Icon as={AddRoundedIcon} />}
				>
					Lägg till recept
				</Button>
			</VStack>
		</VStack>
	);
}

export default WeekmenuPage;
