import React from "react";
import {
	Button,
	HStack,
	Icon,
	Image,
	Popover,
	PopoverArrow,
	PopoverContent,
	PopoverTrigger,
} from "@chakra-ui/react";
import LogoTextBlack from "../assets/logo/LogoTextBlack.svg";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";

function Navbar() {
	return (
		<HStack bgColor="gray.100" py="4" px="10" spacing="2">
			<a href={"/"}>
				<Image src={LogoTextBlack} alt="logo" w="28" />
			</a>
			<Popover>
				<PopoverTrigger>
					<Button
						leftIcon={
							<Icon as={RestaurantMenuRoundedIcon} boxSize="8" />
						}
					>
						Recept
					</Button>
				</PopoverTrigger>
				<PopoverContent w="fit-content">
					<PopoverArrow />
					<Button variant="ghost">Alla recept</Button>
					<Button variant="ghost">Skapa recept</Button>
				</PopoverContent>
			</Popover>
			<Button leftIcon={<Icon as={EggOutlinedIcon} boxSize="8" />}>
				Ingredienser
			</Button>
			<Button leftIcon={<Icon as={ListAltRoundedIcon} boxSize="8" />}>
				Veckomeny
			</Button>
		</HStack>
	);
}

export default Navbar;
