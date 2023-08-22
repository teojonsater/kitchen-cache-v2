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

interface Props {
	searchQuery: string;
	onSearchQueryChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ searchQuery, onSearchQueryChange }: Props) {
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
				<FilterButton />
			</InputRightElement>
		</InputGroup>
	);
}

export default SearchBar;
