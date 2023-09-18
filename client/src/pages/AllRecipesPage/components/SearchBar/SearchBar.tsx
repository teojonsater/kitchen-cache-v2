import React from "react";
import type { ChangeEvent } from "react";
import {
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Select,
} from "@chakra-ui/react";
import FilterButton from "./FilterButton";
import sortByOptions from "../../utils/sortByOptions";
import type RecipeObject from "../../../../interfaces/recipe/RecipeObject";

interface Props {
	searchQuery: string;
	onSearchQueryChange: (event: ChangeEvent<HTMLInputElement>) => void;
	searchedIngredients: string[];
	filterIngredientsSearchQuery: string;
	onFilterIngredientsSearchQueryChange: (
		event: ChangeEvent<HTMLInputElement>,
	) => void;
	onIngredientFilterChange: (ingredient: string) => void;
	filteredIngredients: string[];
	onIngredientFilterSwitchChange: () => void;
	allRecipes: RecipeObject[];
	filterCookingTimeValues: number[];
	onFilterCookingTimeValuesChange: (newValues: [number, number]) => void;
	sortByOption: string;
	onSortByOptionChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	onClearFilterBtnClick: () => void;
	filterCostPerServingValues: number[];
	onFilterCostPerServingValues: (newValues: [number, number]) => void;
}

function SearchBar({
	searchQuery,
	onSearchQueryChange,
	searchedIngredients,
	filterIngredientsSearchQuery,
	onFilterIngredientsSearchQueryChange,
	onIngredientFilterChange,
	filteredIngredients,
	onIngredientFilterSwitchChange,
	allRecipes,
	filterCookingTimeValues,
	onFilterCookingTimeValuesChange,
	sortByOption,
	onSortByOptionChange,
	onClearFilterBtnClick,
	filterCostPerServingValues,
	onFilterCostPerServingValues,
}: Props) {
	return (
		<InputGroup>
			<InputLeftElement
				borderLeftRadius="full"
				bgColor="teal.500"
				w="fit-content"
			>
				<Select
					borderLeftRadius="full"
					focusBorderColor="teal.500"
					color="white"
					onChange={onSortByOptionChange}
					value={sortByOption}
				>
					{sortByOptions.map((sortBy, index) => {
						return (
							<option
								style={{ color: "black" }}
								key={index}
								value={sortBy}
							>
								{sortBy}
							</option>
						);
					})}
				</Select>
			</InputLeftElement>
			<Input
				placeholder="Sök recept"
				bgColor="white"
				shadow="base"
				borderRadius="full"
				focusBorderColor="teal.500"
				pl="36"
				value={searchQuery}
				onChange={onSearchQueryChange}
			/>
			<InputRightElement>
				<FilterButton
					searchedIngredients={searchedIngredients}
					filterIngredientsSearchQuery={filterIngredientsSearchQuery}
					onFilterIngredientsSearchQueryChange={
						onFilterIngredientsSearchQueryChange
					}
					onIngredientFilterChange={onIngredientFilterChange}
					filteredIngredients={filteredIngredients}
					onIngredientFilterSwitchChange={
						onIngredientFilterSwitchChange
					}
					allRecipes={allRecipes}
					filterCookingTimeValues={filterCookingTimeValues}
					onFilterCookingTimeValuesChange={
						onFilterCookingTimeValuesChange
					}
					onClearFilterBtnClick={onClearFilterBtnClick}
					filterCostPerServingValues={filterCostPerServingValues}
					onFilterCostPerServingValues={onFilterCostPerServingValues}
				/>
			</InputRightElement>
		</InputGroup>
	);
}

export default SearchBar;
