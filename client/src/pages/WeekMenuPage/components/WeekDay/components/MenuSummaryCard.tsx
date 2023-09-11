import React from "react";
import {
	Card,
	CardBody,
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
	StackDivider,
	Text,
	VStack,
} from "@chakra-ui/react";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import type RecipeIngredientGroup from "../../../../../interfaces/recipe/RecipeIngredientGroup";
import countNoOfIngredients from "../../../../../utils/countNoOfIngredients";

interface Props {
	index: number;
	name: string;
	image: string;
	cookingTime: number;
	costPerServing: number;
	ingredientGroups: RecipeIngredientGroup[];
	menuServings: number;
	day: string;
	onRemoveRecipe: (day: string, indexToRemove: number) => void;
}

function MenuSummaryCard({
	index,
	name,
	image,
	cookingTime,
	costPerServing,
	ingredientGroups,
	menuServings,
	day,
	onRemoveRecipe,
}: Props) {
	return (
		<Card direction="row" w="full">
			<Image aspectRatio="16/9" objectFit="cover" maxW="xs" src={image} />
			<CardBody>
				<HStack align="start" justify="space-between" h="full">
					<VStack justify="space-between" align="start" h="full">
						<VStack spacing="4" align="start">
							<Heading size="md">{name}</Heading>
							<HStack>
								<Text>Port:</Text>
								<NumberInput
									size="sm"
									defaultValue={menuServings}
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
								<Text fontSize="sm">{cookingTime} min</Text>
							</HStack>
							<HStack spacing="1">
								<Icon as={EggOutlinedIcon} boxSize="4" />
								<Text fontSize="sm">
									{countNoOfIngredients(ingredientGroups)}{" "}
									ingredienser
								</Text>
							</HStack>
							<HStack spacing="1">
								<Icon as={PaymentsOutlinedIcon} boxSize="4" />
								<Text fontSize="sm">
									{costPerServing.toFixed(2)} kr
								</Text>
							</HStack>
						</HStack>
					</VStack>
					<IconButton
						aria-label="delete"
						icon={<Icon as={ClearRoundedIcon} boxSize="5" />}
						variant="ghost"
						borderRadius="full"
						size="sm"
						onClick={() => {
							onRemoveRecipe(day, index);
						}}
					/>
				</HStack>
			</CardBody>
		</Card>
	);
}

export default MenuSummaryCard;
