import { Box, Checkbox, HStack, Text, useBoolean } from "@chakra-ui/react";
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
			<HStack align="start">
				<Checkbox
					onChange={setChecked.toggle}
					isChecked={checked}
					colorScheme="teal"
				/>

				<Text
					color={checked ? "gray.300" : "gray.800"}
					textDecoration={checked ? "line-through" : "none"}
					noOfLines={checked ? 1 : undefined}
				>
					{step}
				</Text>
			</HStack>
		</Box>
	);
}

export default Step;
