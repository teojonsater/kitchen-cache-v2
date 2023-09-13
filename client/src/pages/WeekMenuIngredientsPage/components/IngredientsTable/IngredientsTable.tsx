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

function IngredientsTable() {
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
							<Th
								color="black"
								textTransform="none"
								as={Flex}
								justifyContent="flex-end"
							>
								<Heading
									size="md"
									variant="highlighted"
									w="fit-content"
								>
									Pris
								</Heading>
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td fontWeight="bold">3 l</Td>
							<Td>Mjölk</Td>
							<Td isNumeric>54.90 kr</Td>
						</Tr>
						<Tr>
							<Td fontWeight="bold">3 kg</Td>
							<Td>Kycklingfilé</Td>
							<Td isNumeric>54.90 kr</Td>
						</Tr>
						<Tr>
							<Td fontWeight="bold">4 dl</Td>
							<Td>Vispgrädde</Td>
							<Td isNumeric>54.90 kr</Td>
						</Tr>
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
