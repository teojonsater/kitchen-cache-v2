import {
    Card,
    CardBody,
    Checkbox,
    Flex,
    Heading,
    HStack,
    Icon,
    Link,
    ListItem,
    OrderedList,
    Spacer,
    Stack,
    StackDivider,
    Text,
    VStack
} from "@chakra-ui/react";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

function DescriptionCard() {
    return (
        <Card w={"lg"}>
            <CardBody>
                <VStack spacing="4" alignItems="start" divider={<StackDivider/>}>
                    <Text>Detta recept är så fkn jäkla otroligt gott att det är sjukt. Om man vill kan man byta ut ägg mot mjöl men det rekomenderas inte av oss.</Text>
                    <Link href='https://www.arla.se/recept/morotskaka/' isExternal color='teal.500'>
                        Arla
                        <Icon as={OpenInNewRoundedIcon} boxSize={4}/>
                    </Link>
                </VStack>
            </CardBody>
        </Card>
    )
}

export default DescriptionCard;