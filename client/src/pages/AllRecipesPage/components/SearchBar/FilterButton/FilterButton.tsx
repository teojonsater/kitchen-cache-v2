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

interface Props {
	searchedIngredients: string[];
	filterIngredientsSearchQuery: string;
	onFilterIngredientsSearchQueryChange: (
		event: ChangeEvent<HTMLInputElement>,
	) => void;
}

function FilterButton({
	searchedIngredients,
	filterIngredientsSearchQuery,
	onFilterIngredientsSearchQueryChange,
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
							/>
							<TimeFilter />
							<PriceFilter />
						</Accordion>
					</DrawerBody>

					<DrawerFooter borderTopWidth="1px">
						<Button variant="outline" mr={3}>
							Rensa filter
						</Button>
						<Button colorScheme="teal">Filtrera</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default FilterButton;
