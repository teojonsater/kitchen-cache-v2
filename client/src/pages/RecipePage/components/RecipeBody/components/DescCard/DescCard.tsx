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
					alignItems="center"
					divider={<StackDivider />}
				>
					<Heading size="md" variant="highlighted">
						Beskrivning
					</Heading>
					<Text>{desc}</Text>
				</VStack>
			</CardBody>
		</Card>
	);
}

export default DescCard;
