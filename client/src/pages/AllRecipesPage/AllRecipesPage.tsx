import React, { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import {
	Button,
	HStack,
	Heading,
	Link,
	SimpleGrid,
	VStack,
} from "@chakra-ui/react";
import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import SummaryCard from "./components/SummaryCard";
import SearchBar from "./components/SearchBar";
import allRecipes from "../../utils/recipes";
import filterRecipes from "./utils/filterRecipes";

function AllRecipesPage() {
	const [filteredRecipes, setFilteredRecipes] =
		useState<RecipeObject[]>(allRecipes);
	const [searchQuery, setSearchQuery] = useState<string>("");

	useEffect(() => {
		setFilteredRecipes(filterRecipes(searchQuery));
	}, [searchQuery]);

	const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	return (
		<VStack spacing={8} align="start" p="8">
			<Heading as="h1" size="2xl">
				Alla Recept
			</Heading>

			<HStack w="full">
				<SearchBar
					searchQuery={searchQuery}
					onSearchQueryChange={handleSearchQueryChange}
				/>
				<Link href="#" isExternal _hover={{ textDecoration: "none" }}>
					<Button
						variant="outline"
						colorScheme="teal"
						isDisabled={filteredRecipes.length == 0 ? true : false}
					>
						Slumpa Recept
					</Button>
				</Link>
			</HStack>

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
	);
}

export default AllRecipesPage;
