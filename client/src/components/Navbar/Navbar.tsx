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
	Link as ChakraLink,
} from "@chakra-ui/react";
import {
	Link as ReactRouterLink,
	NavLink as ReactRouterNavLink,
} from "react-router-dom";
import LogoTextBlack from "../../assets/logo/LogoTextBlack.svg";
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
				maxWidth="5xl"
				px="10"
				as={ButtonGroup}
				variant="ghost"
			>
				<ChakraLink as={ReactRouterLink} to="/">
					<Image src={LogoTextBlack} alt="logo" w="28" />
				</ChakraLink>
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
						<ChakraLink as={ReactRouterNavLink} to="/recipes">
							<Button w="full" borderBottomRadius="0">
								Alla recept
							</Button>
						</ChakraLink>
						<ChakraLink as={ReactRouterNavLink} to="/recipes/new">
							<Button w="full" borderTopRadius="0">
								Skapa recept
							</Button>
						</ChakraLink>
					</PopoverContent>
				</Popover>
				<Button leftIcon={<Icon as={EggOutlinedIcon} boxSize="8" />}>
					Ingredienser
				</Button>
				<Popover>
					<PopoverTrigger>
						<Button
							leftIcon={
								<Icon as={ListAltRoundedIcon} boxSize="8" />
							}
						>
							Veckomeny
						</Button>
					</PopoverTrigger>
					<PopoverContent w="fit-content">
						<PopoverArrow />
						<ChakraLink as={ReactRouterNavLink} to="/weekmenu">
							<Button w="full" borderBottomRadius="0">
								Veckomeny
							</Button>
						</ChakraLink>
						<ChakraLink
							as={ReactRouterNavLink}
							to="/weekmenu/ingredients"
						>
							<Button w="full" borderTopRadius="0">
								Inköpslista
							</Button>
						</ChakraLink>
					</PopoverContent>
				</Popover>
			</HStack>
		</HStack>
	);
}

export default Navbar;
