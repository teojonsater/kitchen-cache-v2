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
import filterRecipes from "./utils/filterRecipes";
import NoSearchResults from "./components/NoSearchResults";
import dummyRecipes from "../../utils/dummyRecipes";
import getAllIngredients from "./utils/getAllIngredients";
import getAllCookingTimes from "./utils/getAllCookingTimes";

function AllRecipesPage() {
	const [filteredRecipes, setFilteredRecipes] =
		useState<RecipeObject[]>(dummyRecipes);
	const [allIngredients] = useState<string[]>(
		getAllIngredients(dummyRecipes),
	);
	const [searchedIngredients, setSearchedIngredients] =
		useState<string[]>(allIngredients);
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [filterIngredientsSearchQuery, setFilterIngredientsSearchQuery] =
		useState<string>("");
	const [filteredIngredients, setFilteredIngredients] = useState<string[]>(
		[],
	);
	const [ingredientFilterSwitch, setIngredientFilterSwitch] =
		useState<boolean>(false);
	const [filterCookingTimeValues, setFilterCookingTimeValues] = useState<
		[number, number]
	>([
		Math.min(...getAllCookingTimes(dummyRecipes)),
		Math.max(...getAllCookingTimes(dummyRecipes)),
	]);

	useEffect(() => {
		setFilteredRecipes(
			filterRecipes(
				dummyRecipes,
				searchQuery,
				filteredIngredients,
				ingredientFilterSwitch,
				filterCookingTimeValues,
			),
		);

		console.log(ingredientFilterSwitch);
	}, [
		searchQuery,
		filteredIngredients,
		ingredientFilterSwitch,
		filterCookingTimeValues,
	]);

	useEffect(() => {
		setSearchedIngredients(
			allIngredients.filter((ingredient) =>
				ingredient
					.toLowerCase()
					.includes(filterIngredientsSearchQuery.toLowerCase()),
			),
		);
	}, [filterIngredientsSearchQuery]);

	const handleFilterIngredientsSearchQueryChange = (
		event: ChangeEvent<HTMLInputElement>,
	) => {
		setFilterIngredientsSearchQuery(event.target.value);
	};

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

	const handleIngredientFilterSwitchChange = () => {
		setIngredientFilterSwitch(!ingredientFilterSwitch);
	};

	const handleFilterCookingTimeValuesChange = (
		newValues: [number, number],
	) => {
		setFilterCookingTimeValues(newValues);
	};

	return (
		<VStack spacing="8" align="start" p="8">
			<Heading as="h1" size="2xl">
				Alla Recept
			</Heading>

			<VStack w="full" align="start" spacing="4">
				<HStack w="full">
					<SearchBar
						searchQuery={searchQuery}
						onSearchQueryChange={handleSearchQueryChange}
						searchedIngredients={searchedIngredients}
						filterIngredientsSearchQuery={
							filterIngredientsSearchQuery
						}
						onFilterIngredientsSearchQueryChange={
							handleFilterIngredientsSearchQueryChange
						}
						onIngredientFilterChange={handleIngredientFilterChange}
						filteredIngredients={filteredIngredients}
						onIngredientFilterSwitchChange={
							handleIngredientFilterSwitchChange
						}
						allRecipes={dummyRecipes}
						filterCookingTimeValues={filterCookingTimeValues}
						onFilterCookingTimeValuesChange={
							handleFilterCookingTimeValuesChange
						}
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
						<Tag
							borderRadius="full"
							colorScheme={
								ingredientFilterSwitch ? "red" : "teal"
							}
							key={index}
						>
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
