import React from "react";
import {
	Button,
	ButtonGroup,
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
		<HStack
			justify="center"
			bgColor="white"
			borderBottom="1px solid"
			borderColor="gray.200"
		>
			<HStack
				py="4"
				spacing="2"
				w="full"
				maxWidth="4xl"
				px="10"
				as={ButtonGroup}
				variant="ghost"
			>
				<a href={"/"}>
					<Image src={LogoTextBlack} alt="logo" w="28" />
				</a>
				<Popover>
					<PopoverTrigger>
						<Button
							leftIcon={
								<Icon
									as={RestaurantMenuRoundedIcon}
									boxSize="8"
								/>
							}
						>
							Recept
						</Button>
					</PopoverTrigger>
					<PopoverContent w="fit-content">
						<PopoverArrow />
						<Button>Alla recept</Button>
						<Button>Skapa recept</Button>
					</PopoverContent>
				</Popover>
				<Button leftIcon={<Icon as={EggOutlinedIcon} boxSize="8" />}>
					Ingredienser
				</Button>
				<Button leftIcon={<Icon as={ListAltRoundedIcon} boxSize="8" />}>
					Veckomeny
				</Button>
			</HStack>
		</HStack>
	);
}

export default Navbar;
