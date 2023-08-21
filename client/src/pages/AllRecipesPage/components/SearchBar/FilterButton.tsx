import React from "react";
import { Icon, IconButton } from "@chakra-ui/react";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

function FilterButton() {
	return (
		<>
			<IconButton
				colorScheme="teal"
				aria-label="Search database"
				icon={<Icon as={TuneRoundedIcon} boxSize={5} />}
				isRound={true}
				size="sm"
			/>
		</>
	);
}

export default FilterButton;
