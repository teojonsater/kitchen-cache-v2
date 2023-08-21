import React from "react";
import {
	AspectRatio,
	Card,
	CardBody,
	HStack,
	Heading,
	Icon,
	Image,
	StackDivider,
	Text,
	VStack,
} from "@chakra-ui/react";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import type RecipeIngredientGroup from "../../../interfaces/recipe/RecipeIngredientGroup";
import countNoOfIngredients from "../../../utils/countNoOfIngredients";

interface Props {
	name: string;
	cookingTime: number;
	ingredientGroups: RecipeIngredientGroup[];
	image: string;
}

function SummaryCard({ name, cookingTime, ingredientGroups, image }: Props) {
	return (
		<Card size="sm">
			<AspectRatio ratio={16 / 9}>
				<Image borderTopRadius="sm" objectFit="cover" src={image} />
			</AspectRatio>
			<CardBody>
				<VStack spacing="4" align="start">
					<Heading size="md">{name}</Heading>
					<HStack divider={<StackDivider />} color="gray.600">
						<HStack>
							<Icon as={AccessTimeRoundedIcon} boxSize="4" />
							<Text fontSize="sm">{cookingTime} min</Text>
						</HStack>
						<HStack>
							<Icon as={EggOutlinedIcon} boxSize="4" />
							<Text fontSize="sm">
								{countNoOfIngredients(ingredientGroups)}{" "}
								ingredienser
							</Text>
						</HStack>
						<HStack>
							<Icon as={PaymentsOutlinedIcon} boxSize="4" />
							<Text fontSize="sm">53,17 kr</Text>
						</HStack>
					</HStack>
				</VStack>
			</CardBody>
		</Card>
	);
}

export default SummaryCard;
