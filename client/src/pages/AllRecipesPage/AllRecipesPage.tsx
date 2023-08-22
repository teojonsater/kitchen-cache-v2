import React, { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import {
	Button,
	HStack,
	Heading,
	Link,
	SimpleGrid,
	Tag,
	TagCloseButton,
	TagLabel,
	Text,
	VStack,
} from "@chakra-ui/react";
import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import SummaryCard from "./components/SummaryCard";
import SearchBar from "./components/SearchBar";
import allRecipes from "../../utils/recipes";
import filterRecipes from "./utils/filterRecipes";
import NoSearchResults from "./components/NoSearchResults";
import allIngredients from "../../utils/allIngredients";

function AllRecipesPage() {
	const [filteredRecipes, setFilteredRecipes] =
		useState<RecipeObject[]>(allRecipes);
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [filteredIngredients, setFilteredIngredients] = useState<string[]>([
		"mjölk",
		"mjöl",
	]);

	useEffect(() => {
		setFilteredRecipes(filterRecipes(searchQuery));
	}, [searchQuery]);

	const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handleIngredientFilterChange = (ingredient: string) => {
		const isIngredientSelected = filteredIngredients.includes(ingredient);

		if (isIngredientSelected) {
			setFilteredIngredients((prevIngredients) =>
				prevIngredients.filter((item) => item !== ingredient),
			);
		} else {
			setFilteredIngredients((prevIngredients) => [
				...prevIngredients,
				ingredient,
			]);
		}
	};

	return (
		<VStack spacing={8} align="start" p="8">
			<Heading as="h1" size="2xl">
				Alla Recept
			</Heading>

			<VStack w="full" align="start" spacing="4">
				<HStack w="full">
					<SearchBar
						searchQuery={searchQuery}
						onSearchQueryChange={handleSearchQueryChange}
					/>
					<Link
						href="#"
						isExternal
						_hover={{ textDecoration: "none" }}
					>
						<Button
							variant="outline"
							colorScheme="teal"
							isDisabled={
								filteredRecipes.length == 0 ? true : false
							}
						>
							Slumpa Recept
						</Button>
					</Link>
				</HStack>
				<HStack>
					{filteredIngredients.map((ingredient, index) => (
						<Tag borderRadius="full" colorScheme="teal" key={index}>
							<TagLabel>{ingredient}</TagLabel>
							<TagCloseButton
								onClick={() => {
									handleIngredientFilterChange(ingredient);
								}}
							/>
						</Tag>
					))}
				</HStack>
			</VStack>

			<VStack w="full" align="start">
				{filteredRecipes.length > 0 && (
					<Text>{filteredRecipes.length} resultat</Text>
				)}

				{filteredRecipes.length == 0 && <NoSearchResults />}

				<SimpleGrid w="full" minChildWidth="72" spacing={8}>
					{filteredRecipes.map((recipe, index) => (
						<SummaryCard
							name={recipe.name}
							cookingTime={recipe.cookingTime}
							ingredientGroups={recipe.ingredientGroups}
							image={recipe.image}
							key={index}
							searchQuery={searchQuery}
						/>
					))}
				</SimpleGrid>
			</VStack>
		</VStack>
	);
}

export default AllRecipesPage;
