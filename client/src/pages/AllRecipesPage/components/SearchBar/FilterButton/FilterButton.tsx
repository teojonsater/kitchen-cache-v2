import React from "react";
import type { ChangeEvent } from "react";
import {
	Accordion,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	Heading,
	Icon,
	IconButton,
	useDisclosure,
} from "@chakra-ui/react";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import IngredientFilter from "./IngredientFilter";
import TimeFilter from "./TimeFilter";
import PriceFilter from "./PriceFilter";
import type RecipeObject from "../../../../../interfaces/recipe/RecipeObject";
interface Props {
	searchedIngredients: string[];
	filterIngredientsSearchQuery: string;
	onFilterIngredientsSearchQueryChange: (
		event: ChangeEvent<HTMLInputElement>,
	) => void;
	onIngredientFilterChange: (ingredient: string) => void;
	filteredIngredients: string[];
	onRecipeShouldNotContainSwitchChange: () => void;
	allRecipes: RecipeObject[];
	filterCookingTimeValues: number[];
	onFilterCookingTimeValuesChange: (newValues: [number, number]) => void;
	onClearFilterBtnClick: () => void;
	filterCostPerServingValues: number[];
	onFilterCostPerServingValues: (newValues: [number, number]) => void;
	recipeShouldNotContainSwitch: boolean;
	onRecipeShouldContainEveryIngredientSwitch: () => void;
	recipeShouldContainEveryIngredientSwitch: boolean;
}

function FilterButton({
	searchedIngredients,
	filterIngredientsSearchQuery,
	onFilterIngredientsSearchQueryChange,
	onIngredientFilterChange,
	filteredIngredients,
	onRecipeShouldNotContainSwitchChange,
	allRecipes,
	filterCookingTimeValues,
	onFilterCookingTimeValuesChange,
	onClearFilterBtnClick,
	filterCostPerServingValues,
	onFilterCostPerServingValues,
	recipeShouldNotContainSwitch,
	onRecipeShouldContainEveryIngredientSwitch,
	recipeShouldContainEveryIngredientSwitch,
}: Props) {
	const drawerDisclosure = useDisclosure();

	return (
		<>
			<IconButton
				colorScheme="teal"
				aria-label="Search database"
				icon={<Icon as={TuneRoundedIcon} boxSize={5} />}
				isRound={true}
				size="sm"
				onClick={drawerDisclosure.onOpen}
			/>

			<Drawer
				isOpen={drawerDisclosure.isOpen}
				placement="right"
				onClose={drawerDisclosure.onClose}
				size="sm"
				blockScrollOnMount={false}
			>
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth="1px">
						<Heading size="lg">Filtrera recept</Heading>
					</DrawerHeader>

					<DrawerBody>
						<Accordion allowMultiple>
							<IngredientFilter
								searchedIngredients={searchedIngredients}
								filterIngredientsSearchQuery={
									filterIngredientsSearchQuery
								}
								onFilterIngredientsSearchQueryChange={
									onFilterIngredientsSearchQueryChange
								}
								onIngredientFilterChange={
									onIngredientFilterChange
								}
								filteredIngredients={filteredIngredients}
								onRecipeShouldNotContainSwitchChange={
									onRecipeShouldNotContainSwitchChange
								}
								recipeShouldNotContainSwitch={
									recipeShouldNotContainSwitch
								}
								onRecipeShouldContainEveryIngredientSwitch={
									onRecipeShouldContainEveryIngredientSwitch
								}
								recipeShouldContainEveryIngredientSwitch={
									recipeShouldContainEveryIngredientSwitch
								}
							/>
							<TimeFilter
								allRecipes={allRecipes}
								filterCookingTimeValues={
									filterCookingTimeValues
								}
								onFilterCookingTimeValuesChange={
									onFilterCookingTimeValuesChange
								}
							/>
							<PriceFilter
								allRecipes={allRecipes}
								filterCostPerServingValues={
									filterCostPerServingValues
								}
								onFilterCostPerServingValues={
									onFilterCostPerServingValues
								}
							/>
						</Accordion>
					</DrawerBody>

					<DrawerFooter borderTopWidth="1px">
						<Button
							variant="outline"
							mr={3}
							onClick={onClearFilterBtnClick}
						>
							Rensa filter
						</Button>
						<Button
							colorScheme="teal"
							onClick={() => {
								drawerDisclosure.onClose();
							}}
						>
							Filtrera
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default FilterButton;
