import React from "react";
import {
    Box, Card,
    CardBody,
    Flex,
    FormControl, FormLabel,
    Heading,
    HStack,
    Icon,
    IconButton, ListItem,
    Spacer,
    StackDivider, Switch, Text, UnorderedList,
    VStack
} from "@chakra-ui/react";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

function IngredientsCard() {
    return (
        <Card w="sm">
            <CardBody>
                <Flex direction="column" gap="5">
                    <VStack spacing="4" alignItems="start" divider={<StackDivider/>}>
                        <Heading size='md' textAlign="center" bgColor="teal.400"
                                 color="white" p="3" w="full" borderRadius="lg">Ingredienser</Heading>
                        <Flex w="full" alignItems='center' gap='2'>
                            <HStack>
                                <IconButton
                                    aria-label={"decrease no. ingredients"}
                                    icon={<Icon as={RemoveRoundedIcon} boxSize="4"/>}
                                    size="xs"
                                    variant="outline"
                                    colorScheme="teal"
                                />
                                <Text fontSize="lg">2 portioner</Text>
                                <IconButton
                                    aria-label={"increase no. ingredients"}
                                    icon={<Icon as={AddRoundedIcon} boxSize="4"/>}
                                    size="xs"
                                    variant="outline"
                                    colorScheme="teal"
                                />
                            </HStack>
                            <Spacer/>
                            <FormControl display='flex' alignItems='center' w="fit-content">
                                <FormLabel htmlFor='ingredientMeasurement' mb='0' fontSize="lg" mr="2">
                                    SE
                                </FormLabel>
                                <Switch id='ingredientMeasurement' colorScheme="teal"/>
                            </FormControl>
                        </Flex>
                    </VStack>
                    <Box border="1px solid" borderColor="gray.200" borderRadius="lg" p="3">
                        <Heading size="sm" mb="2" color="teal.700" fontWeight="bold">Grupp 1</Heading>
                        <UnorderedList>
                            <ListItem><b>5 ml</b> ingefära</ListItem>
                            <ListItem><b>50 g</b> ost</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box border="1px solid" borderColor="gray.200" borderRadius="lg" p="3">
                        <Heading size="sm" mb="2" color="teal.700" fontWeight="bold">Grupp 2</Heading>
                        <VStack spacing="0" alignItems="start">
                            <Text>Sparris</Text>
                            <Text><b>2</b> kaviar</Text>
                        </VStack>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default IngredientsCard;