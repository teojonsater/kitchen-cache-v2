import React from "react";
import {
    Card,
    CardBody,
    Checkbox,
    Flex,
    Heading,
    HStack,
    ListItem,
    OrderedList,
    StackDivider,
    VStack
} from "@chakra-ui/react";

function StepsCard() {
    return (
        <Card w="lg">
            <CardBody>
                <Flex direction="column" gap="5">
                    <VStack spacing="4" alignItems="start" divider={<StackDivider/>}>
                        <Heading size='md' textAlign="center" textTransform="uppercase" bgColor="teal.400"
                                 color="white" py="3" px="3" w="full" borderRadius="lg">Gör Så Här</Heading>
                        <OrderedList>
                            <HStack>
                                <Checkbox colorScheme='teal' mr={4} isChecked={true} />
                                <ListItem color={"gray.300"} textDecoration={"line-through"}>Steg 1</ListItem>
                            </HStack>
                            <HStack>
                                <Checkbox colorScheme='teal' mr={4}/>
                                <ListItem>Steg 2</ListItem>
                            </HStack>
                            <HStack>
                                <Checkbox colorScheme='teal' mr={4}/>
                                <ListItem>Steg 3</ListItem>
                            </HStack>
                        </OrderedList>
                    </VStack>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default StepsCard;