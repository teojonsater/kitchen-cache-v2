import {
	Button,
	Card,
	CardBody,
	FormLabel,
	Icon,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import StepField from "./components/StepField";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

function StepsFieldsContainer() {
	return (
		<Card>
			<CardBody>
				<FormLabel>Steg</FormLabel>
				<VStack align="stretch">
					<StepField />
					<StepField />
					<StepField />
					<StepField />
					<StepField />
					<Button
						maxW="fit-content"
						size="sm"
						colorScheme="teal"
						variant="ghost"
						leftIcon={<Icon as={AddRoundedIcon} boxSize="4" />}
					>
						Lägg till steg
					</Button>
				</VStack>
			</CardBody>
		</Card>
	);
}

export default StepsFieldsContainer;
