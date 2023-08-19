import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import RecipePage from "./pages/RecipePage";
import Navbar from "./design/Navbar";

function Layout() {
	return (
		<>
			<Flex w="full" justifyContent="center">
				<Box maxWidth="4xl" w="full" bgColor="white">
					<Navbar />
					<RecipePage />
					<Outlet />
				</Box>
			</Flex>
		</>
	);
}

export default Layout;
