import React from "react";
import { FormControl, HStack, Icon, IconButton, Input } from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function StepField() {
	return (
		<HStack>
			<FormControl isRequired>
				<Input placeholder="Steg" />
			</FormControl>
			<IconButton
				size="sm"
				aria-label="Delete Step"
				variant="ghost"
				borderRadius="full"
				icon={<Icon as={CloseRoundedIcon} boxSize="4" />}
			/>
		</HStack>
	);
}

export default StepField;
