import React from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import FilterButton from "./FilterButton";

function SearchBar() {
	return (
		<InputGroup>
			<Input
				placeholder="Sök recept"
				bgColor="white"
				shadow="base"
				borderRadius="full"
				focusBorderColor="teal.500"
			/>
			<InputRightElement>
				<FilterButton />
			</InputRightElement>
		</InputGroup>
	);
}

export default SearchBar;
