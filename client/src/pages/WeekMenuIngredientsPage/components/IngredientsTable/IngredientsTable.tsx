import React from "react";
import {
	Flex,
	Heading,
	Table,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
	VStack,
} from "@chakra-ui/react";
import type RecipeIngredient from "../../../../interfaces/recipe/RecipeIngredient";
import TableRow from "./TableRow";

interface Props {
	weekMenuIngredients: RecipeIngredient[];
}

function IngredientsTable({ weekMenuIngredients }: Props) {
	return (
		<VStack spacing="8" w="full">
			<TableContainer w="full">
				<Table variant="striped">
					<Thead>
						<Tr>
							<Th color="black" textTransform="none">
								<Heading
									size="md"
									variant="highlighted"
									w="fit-content"
								>
									Mängd
								</Heading>
							</Th>
							<Th color="black" textTransform="none">
								<Heading
									size="md"
									variant="highlighted"
									w="fit-content"
								>
									Ingrediens
								</Heading>
							</Th>
							<Th color="black" textTransform="none">
								<Flex justifyContent="flex-end">
									<Heading
										size="md"
										variant="highlighted"
										w="fit-content"
									>
										Pris
									</Heading>
								</Flex>
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{weekMenuIngredients
							.sort((a, b) => a.name.localeCompare(b.name))
							.map((weekMenuIngredient, index) => {
								return (
									<TableRow
										key={index}
										weekMenuIngredient={weekMenuIngredient}
									/>
								);
							})}
					</Tbody>
					<Tfoot>
						<Tr>
							<Td></Td>
							<Td></Td>
							<Td isNumeric fontWeight="bold" color="teal.700">
								406.97 kr
							</Td>
						</Tr>
					</Tfoot>
				</Table>
			</TableContainer>
		</VStack>
	);
}

export default IngredientsTable;
