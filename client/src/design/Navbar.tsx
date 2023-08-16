import React from "react";
import {
    Button,
    Heading,
    HStack,
    Icon,
    Image,
    Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger, VStack
} from "@chakra-ui/react";
import LogoTextBlack from "../assets/logo/LogoTextBlack.svg";
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';

function Navbar() {
    return (
        <HStack bgColor="gray.100" py="4" px="10" spacing="2">
            <a href={"/"}>
            <Image src={LogoTextBlack} alt="logo" w="28"/>
            </a>
            <Popover>
                <PopoverTrigger>
                    <Button>
                        <HStack>
                            <Icon as={RestaurantMenuRoundedIcon} boxSize="8" color="gray.700"/>
                            <Heading size="sm" color="gray.700">Recept</Heading>
                        </HStack>
                    </Button>
                </PopoverTrigger>
                <PopoverContent w="fit-content">
                    <PopoverArrow/>
                        <Button variant="ghost">
                            Alla recept
                        </Button>
                        <Button variant="ghost">
                            Skapa recept
                        </Button>
                </PopoverContent>
            </Popover>
            <Button>
                <HStack>
                    <Icon as={ShoppingBasketOutlinedIcon} boxSize="8" color="gray.700"/>
                    <Heading size="sm" color="gray.700">Ingredienser</Heading>
                </HStack>
            </Button>
            <Button>
                <HStack>
                    <Icon as={ListAltRoundedIcon} boxSize="8" color="gray.700"/>
                    <Heading size="sm" color="gray.700">Veckomeny</Heading>
                </HStack>
            </Button>
        </HStack>
    );
}

export default Navbar;