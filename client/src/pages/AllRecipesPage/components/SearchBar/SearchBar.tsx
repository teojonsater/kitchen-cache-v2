import React from "react";
import type { ChangeEvent } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import FilterButton from "./FilterButton";

interface Props {
	searchQuery: string;
	onSearchQueryChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ searchQuery, onSearchQueryChange }: Props) {
	return (
		<InputGroup>
			<Input
				placeholder="Sök recept"
				bgColor="white"
				shadow="base"
				borderRadius="full"
				focusBorderColor="teal.500"
				value={searchQuery}
				onChange={onSearchQueryChange}
			/>
			<InputRightElement>
				<FilterButton />
			</InputRightElement>
		</InputGroup>
	);
}

export default SearchBar;
