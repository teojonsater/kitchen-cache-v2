import React from "react";
import {
	Card,
	CardBody,
	Heading,
	StackDivider,
	VStack,
} from "@chakra-ui/react";
import Step from "./Step";

interface Props {
	steps: string[];
}

function StepsCard({ steps }: Props) {
	return (
		<Card>
			<CardBody>
				<VStack
					spacing="4"
					alignItems="center"
					divider={<StackDivider />}
				>
					<Heading size="md" variant="highlighted">
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
