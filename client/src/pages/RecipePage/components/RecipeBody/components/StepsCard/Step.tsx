import {
	Box,
	Checkbox,
	FormControl,
	FormLabel,
	HStack,
	useBoolean,
} from "@chakra-ui/react";
import React from "react";

interface Props {
	step: string;
}

function Step({ step }: Props) {
	const [checked, setChecked] = useBoolean(false);

	return (
		<Box
			border="1px solid"
			borderColor="gray.200"
			borderRadius="lg"
			p="3"
			w="full"
		>
			<FormControl as={HStack} align="start">
				<Checkbox
					mt="1"
					onChange={setChecked.toggle}
					isChecked={checked}
					colorScheme="teal"
				/>

				<FormLabel
					color={checked ? "gray.300" : "gray.800"}
					textDecoration={checked ? "line-through" : "none"}
					noOfLines={checked ? 1 : undefined}
					fontWeight="normal"
					cursor="pointer"
				>
					{step}
				</FormLabel>
			</FormControl>
		</Box>
	);
}

export default Step;
