import React from "react";
import {
    Box, Card,
    CardBody,
    Flex,
    FormControl, FormLabel,
    Heading,
    HStack,
    Icon,
    IconButton,
    Spacer,
    StackDivider, Switch, Text,
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
                        <Heading size='md' textAlign="center" textTransform="uppercase" bgColor="teal.400"
                                 color="white" py="3" px="3" w="full" borderRadius="lg">Ingredienser</Heading>
                        <Flex w="full" alignItems='center' gap='2'>
                            <HStack>
                                <IconButton
                                    aria-label={"decrease no. ingredients"}
                                    icon={<Icon as={RemoveRoundedIcon} boxSize="4"/>}
                                    size="xs"
                                    variant="outline"
                                    colorScheme="teal"
                                />
                                <Heading size='xs'>2 portioner</Heading>
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
                                <FormLabel htmlFor='ingredientMeasurement' mb='0'>
                                    SE
                                </FormLabel>
                                <Switch id='ingredientMeasurement' colorScheme="teal"/>
                            </FormControl>
                        </Flex>
                    </VStack>
                    <Box border="1px solid" borderColor="gray.200" borderRadius="lg" p="2">
                        <VStack spacing="0" alignItems="start">
                            <Text><b>5 ml</b> ingefära</Text>
                            <Text><b>50 g</b> ost</Text>
                        </VStack>
                    </Box>
                    <Box border="1px solid" borderColor="gray.200" borderRadius="lg" p="2">
                        <Heading size="sm" mb="2" color="teal.700">Grupp 1</Heading>
                        <VStack spacing="0" alignItems="start">
                            <Text><b>5 ml</b> ingefära</Text>
                            <Text><b>50 g</b> ost</Text>
                        </VStack>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default IngredientsCard;