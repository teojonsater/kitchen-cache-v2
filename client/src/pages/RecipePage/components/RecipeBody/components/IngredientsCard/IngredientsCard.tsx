import React from "react";
import {
	Card,
	CardBody,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Icon,
	IconButton,
	Spacer,
	StackDivider,
	Switch,
	Text,
	VStack,
} from "@chakra-ui/react";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import type RecipeIngredientGroup from "../../../../../../interfaces/recipe/RecipeIngredientGroup";
import IngredientGroupBox from "./IngredientGroupBox";

interface Props {
	ingredientGroups: RecipeIngredientGroup[];
}

function IngredientsCard({ ingredientGroups }: Props) {
	return (
		<Card h="full">
			<CardBody>
				<Flex direction="column" gap="5">
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
							Ingredienser
						</Heading>
						<Flex w="full" alignItems="center" gap="2">
							<HStack>
								<IconButton
									aria-label={"decrease no. ingredients"}
									icon={
										<Icon
											as={RemoveRoundedIcon}
											boxSize="4"
										/>
									}
									size="xs"
									variant="outline"
									colorScheme="teal"
								/>
								<Text>2 portioner</Text>
								<IconButton
									aria-label={"increase no. ingredients"}
									icon={
										<Icon as={AddRoundedIcon} boxSize="4" />
									}
									size="xs"
									variant="outline"
									colorScheme="teal"
								/>
							</HStack>
							<Spacer />
							<FormControl
								display="flex"
								alignItems="center"
								w="fit-content"
							>
								<FormLabel
									htmlFor="ingredientMeasurement"
									mb="0"
									mr="2"
								>
									SE
								</FormLabel>
								<Switch
									id="ingredientMeasurement"
									colorScheme="teal"
								/>
							</FormControl>
						</Flex>
					</VStack>
					{ingredientGroups.map((ingredientGroup, index) => (
						<IngredientGroupBox
							ingredientGroup={ingredientGroup}
							key={index}
						/>
					))}
				</Flex>
			</CardBody>
		</Card>
	);
}

export default IngredientsCard;
