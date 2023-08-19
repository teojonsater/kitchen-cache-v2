import React from "react";
import {
	Card,
	CardBody,
	HStack,
	Icon,
	StackDivider,
	Text,
	VStack,
} from "@chakra-ui/react";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

function StatsCard() {
	return (
		<Card w={"sm"} bgColor={"teal.400"}>
			<CardBody>
				<HStack
					divider={<StackDivider />}
					justifyContent={"space-between"}
					color="white"
				>
					<VStack>
						<Icon as={AccessTimeRoundedIcon} boxSize={10} />
						<Text>90 min</Text>
					</VStack>
					<VStack>
						<Icon as={EggOutlinedIcon} boxSize={10} />
						<Text>7 ingredienser</Text>
					</VStack>
					<VStack>
						<Icon as={PaymentsOutlinedIcon} boxSize={10} />
						<Text fontWeight="">53,17 kr</Text>
					</VStack>
				</HStack>
			</CardBody>
		</Card>
	);
}

export default StatsCard;
