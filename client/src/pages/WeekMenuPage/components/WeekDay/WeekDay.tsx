import React from "react";
import { Button, Heading, Icon, VStack } from "@chakra-ui/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SummaryCard from "./components/SummaryCard";

function WeekDay() {
	return (
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
	);
}

export default WeekDay;
