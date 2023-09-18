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
import SummaryCard from "../../components/SummaryCard";
import SearchBar from "./components/SearchBar";
import filterRecipes from "./utils/filterRecipes";
import NoSearchResults from "../../components/NoSearchResults";
import dummyRecipes from "../../utils/dummyRecipes";
import getAllIngredients from "./utils/getAllIngredients";
import getAllCookingTimes from "./utils/getAllCookingTimes";
import recipeSort from "./utils/recipeSort";
import getAllCostPerServings from "./utils/getAllCostPerServings";
import cleanString from "../../utils/cleanString";

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
	const [recipeShouldNotContainSwitch, setRecipeShouldNotContainSwitch] =
		useState<boolean>(false);
	const [
		recipeShouldContainEveryIngredientSwitch,
		setRecipeShouldContainEveryIngredientSwitch,
	] = useState<boolean>(true);
	const [filterCookingTimeValues, setFilterCookingTimeValues] = useState<
		[number, number]
	>([
		Math.min(...getAllCookingTimes(dummyRecipes)),
		Math.max(...getAllCookingTimes(dummyRecipes)),
	]);
	const [filterCostPerServingValues, setFilterCostPerServingValues] =
		useState<[number, number]>([
			Math.floor(Math.min(...getAllCostPerServings(dummyRecipes))),
			Math.ceil(Math.max(...getAllCostPerServings(dummyRecipes))),
		]);
	const [sortByOption, setSortByOption] = useState<string>("Titel: A-Ö");

	useEffect(() => {
		setFilteredRecipes(
			filterRecipes(
				dummyRecipes,
				searchQuery,
				filteredIngredients,
				recipeShouldNotContainSwitch,
				filterCookingTimeValues,
				filterCostPerServingValues,
				recipeShouldContainEveryIngredientSwitch,
			),
		);
	}, [
		searchQuery,
		filteredIngredients,
		recipeShouldNotContainSwitch,
		filterCookingTimeValues,
		filterCostPerServingValues,
		recipeShouldContainEveryIngredientSwitch,
	]);

	useEffect(() => {
		setSearchedIngredients(
			allIngredients.filter((ingredient) =>
				cleanString(ingredient.toLocaleLowerCase()).includes(
					cleanString(filterIngredientsSearchQuery.toLowerCase()),
				),
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

	const handleRecipeShouldNotContainSwitchChange = () => {
		setRecipeShouldNotContainSwitch(!recipeShouldNotContainSwitch);
	};

	const handleRecipeShouldContainEveryIngredientSwitch = () => {
		setRecipeShouldContainEveryIngredientSwitch(
			!recipeShouldContainEveryIngredientSwitch,
		);
	};

	const handleFilterCookingTimeValuesChange = (
		newValues: [number, number],
	) => {
		setFilterCookingTimeValues(newValues);
	};

	const handleSortByOptionChange = (
		event: ChangeEvent<HTMLSelectElement>,
	) => {
		setSortByOption(event.target.value);
	};

	const handleFilterCostPerServingValues = (newValues: [number, number]) => {
		setFilterCostPerServingValues(newValues);
	};

	const handleClearFilterBtnClick = () => {
		setRecipeShouldNotContainSwitch(false);
		setRecipeShouldContainEveryIngredientSwitch(true);
		setFilteredIngredients([]);
		setFilterCookingTimeValues([
			Math.min(...getAllCookingTimes(dummyRecipes)),
			Math.max(...getAllCookingTimes(dummyRecipes)),
		]);
		setFilterCostPerServingValues([
			Math.floor(Math.min(...getAllCostPerServings(dummyRecipes))),
			Math.ceil(Math.max(...getAllCostPerServings(dummyRecipes))),
		]);
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
						onRecipeShouldNotContainSwitchChange={
							handleRecipeShouldNotContainSwitchChange
						}
						allRecipes={dummyRecipes}
						filterCookingTimeValues={filterCookingTimeValues}
						onFilterCookingTimeValuesChange={
							handleFilterCookingTimeValuesChange
						}
						sortByOption={sortByOption}
						onSortByOptionChange={handleSortByOptionChange}
						onClearFilterBtnClick={handleClearFilterBtnClick}
						filterCostPerServingValues={filterCostPerServingValues}
						onFilterCostPerServingValues={
							handleFilterCostPerServingValues
						}
						recipeShouldNotContainSwitch={
							recipeShouldNotContainSwitch
						}
						onRecipeShouldContainEveryIngredientSwitch={
							handleRecipeShouldContainEveryIngredientSwitch
						}
						recipeShouldContainEveryIngredientSwitch={
							recipeShouldContainEveryIngredientSwitch
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
							isDisabled={filteredRecipes.length == 0}
						>
							Slumpa Recept
						</Button>
					</Link>
				</HStack>
				<HStack flexWrap="wrap">
					{filteredIngredients.map((ingredient, index) => (
						<Tag
							borderRadius="full"
							colorScheme={
								recipeShouldNotContainSwitch ? "red" : "teal"
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
					{recipeSort(filteredRecipes, sortByOption).map(
						(recipe, index) => (
							<SummaryCard
								name={recipe.name}
								cookingTime={recipe.cookingTime}
								ingredientGroups={recipe.ingredientGroups}
								image={recipe.image}
								key={index}
								searchQuery={searchQuery}
								costPerServing={recipe.costPerServing}
							/>
						),
					)}
				</SimpleGrid>
			</VStack>
		</VStack>
	);
}

export default AllRecipesPage;
