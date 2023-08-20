import React from "react";
import {
	Card,
	CardBody,
	Heading,
	OrderedList,
	StackDivider,
	VStack,
} from "@chakra-ui/react";
import Step from "./Step";

interface Props {
	steps: string[];
}

function StepsCard({ steps }: Props) {
	return (
		<Card h="full">
			<CardBody>
				<VStack
					spacing="4"
					alignItems="start"
					divider={<StackDivider />}
				>
					<Heading
						size="md"
						textAlign="center"
						bgColor="teal.400"
						color="white"
						py="3"
						px="3"
						w="full"
						borderRadius="lg"
					>
						Gör såhär
					</Heading>
					<VStack align="start" w="full">
						{steps.map((step, index) => (
							<Step step={step} key={index} />
						))}
					</VStack>
				</VStack>
			</CardBody>
		</Card>
	);
}

export default StepsCard;
