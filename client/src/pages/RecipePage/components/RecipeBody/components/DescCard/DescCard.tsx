import React from "react";
import {
	Card,
	CardBody,
	Heading,
	StackDivider,
	Text,
	VStack,
} from "@chakra-ui/react";

interface Props {
	desc: string;
}

function DescCard({ desc }: Props) {
	return (
		<Card>
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
						p="3"
						w="full"
						borderRadius="lg"
					>
						Beskrivning
					</Heading>
					<Text>{desc}</Text>
				</VStack>
			</CardBody>
		</Card>
	);
}

export default DescCard;
