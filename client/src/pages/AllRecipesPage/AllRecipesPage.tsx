import React, { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import {
	Button,
	HStack,
	Heading,
	Link,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack,
	SimpleGrid,
	Text,
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

	const [sliderValues, setSliderValues] = useState([10, 30]);

	const handleChange = (newValues: [number, number]) => {
		setSliderValues(newValues);
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
					<Button variant="outline" colorScheme="teal">
						Slumpa Recept
					</Button>
				</Link>
			</HStack>

			<HStack w="full">
				<Text w="12">{sliderValues[0]}</Text>
				<RangeSlider
					aria-label={["min", "max"]}
					value={sliderValues}
					min={10}
					max={30}
					step={0.01}
					onChange={handleChange}
					colorScheme="teal"
				>
					<RangeSliderTrack>
						<RangeSliderFilledTrack />
					</RangeSliderTrack>
					<RangeSliderThumb index={0} ringOffsetColor={"teal"} />
					<RangeSliderThumb index={1} />
				</RangeSlider>
				<Text w="12">{sliderValues[1]}</Text>
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
