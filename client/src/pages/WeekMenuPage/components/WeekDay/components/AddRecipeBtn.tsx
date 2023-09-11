import React, { useState } from "react";
import type { ChangeEvent } from "react";
import {
	Button,
	Icon,
	Input,
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import filterRecipes from "../../../utils/filterRecipes";
import dummyRecipes from "../../../../../utils/dummyRecipes";
import type RecipeObject from "../../../../../interfaces/recipe/RecipeObject";
import SummaryCard from "../../../../../components/SummaryCard";
import NoSearchResults from "../../../../../components/NoSearchResults";

interface Props {
	onAddRecipe: (day: string, addedRecipe: RecipeObject) => void;
	day: string;
}

function AddRecipeBtn({ onAddRecipe, day }: Props) {
	const recipePickerModalDisclosure = useDisclosure();

	const [modalSearchQuery, setModalSearchQuery] = useState<string>("");

	const [allRecipes, setAllRecipes] = useState<RecipeObject[]>(dummyRecipes);

	const handleModalSearchQueryChange = (
		event: ChangeEvent<HTMLInputElement>,
	) => {
		setModalSearchQuery(event.target.value);
	};

	return (
		<>
			<Button
				variant="ghost"
				colorScheme="teal"
				leftIcon={<Icon as={AddRoundedIcon} />}
				onClick={recipePickerModalDisclosure.onOpen}
			>
				Lägg till recept
			</Button>

			<Modal
				isOpen={recipePickerModalDisclosure.isOpen}
				onClose={recipePickerModalDisclosure.onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Lägg till recept</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input
							placeholder="Sök recept"
							bgColor="white"
							shadow="base"
							borderRadius="full"
							focusBorderColor="teal.500"
							value={modalSearchQuery}
							onChange={handleModalSearchQueryChange}
						/>

						<VStack spacing="8" align="stretch" py="6">
							{filterRecipes(allRecipes, modalSearchQuery)
								.length == 0 && <NoSearchResults />}

							{modalSearchQuery.length > 0 &&
								filterRecipes(allRecipes, modalSearchQuery).map(
									(recipe, index) => (
										<Link
											key={index}
											onClick={() => {
												recipePickerModalDisclosure.onClose();
												onAddRecipe(day, recipe);
											}}
										>
											<SummaryCard
												name={recipe.name}
												cookingTime={recipe.cookingTime}
												ingredientGroups={
													recipe.ingredientGroups
												}
												image={recipe.image}
												costPerServing={
													recipe.costPerServing
												}
												searchQuery={modalSearchQuery}
											/>
										</Link>
									),
								)}
						</VStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export default AddRecipeBtn;
