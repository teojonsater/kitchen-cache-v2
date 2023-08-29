import React from "react";
import {
	AspectRatio,
	Button,
	Card,
	CardBody,
	CardFooter,
	HStack,
	Heading,
	Icon,
	IconButton,
	Image,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Stack,
	StackDivider,
	Text,
	VStack,
} from "@chakra-ui/react";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

function SummaryCard() {
	return (
		<Card direction="row" w="full">
			<Image
				aspectRatio="16/9"
				objectFit="cover"
				maxW="xs"
				src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
				alt="Caffe Latte"
			/>
			<CardBody>
				<HStack align="start" justify="space-between" h="full">
					<VStack justify="space-between" align="start" h="full">
						<VStack spacing="4" align="start">
							<Heading size="md">Fläskytterfilé</Heading>
							<HStack>
								<Text>Port:</Text>
								<NumberInput
									size="sm"
									defaultValue={4}
									max={50}
									min={1}
									clampValueOnBlur={false}
								>
									<NumberInputField w="20" />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</HStack>
						</VStack>
						<HStack
							divider={<StackDivider />}
							color="gray.600"
							spacing="1.5"
						>
							<HStack spacing="1">
								<Icon as={AccessTimeRoundedIcon} boxSize="4" />
								<Text fontSize="sm">60 min</Text>
							</HStack>
							<HStack spacing="1">
								<Icon as={EggOutlinedIcon} boxSize="4" />
								<Text fontSize="sm">15 ingredienser</Text>
							</HStack>
							<HStack spacing="1">
								<Icon as={PaymentsOutlinedIcon} boxSize="4" />
								<Text fontSize="sm">40.46 kr</Text>
							</HStack>
						</HStack>
					</VStack>
					<IconButton
						aria-label="delete"
						icon={<Icon as={ClearRoundedIcon} boxSize="5" />}
						variant="ghost"
						borderRadius="full"
						size="sm"
					/>
				</HStack>
			</CardBody>
		</Card>
	);
}

export default SummaryCard;
