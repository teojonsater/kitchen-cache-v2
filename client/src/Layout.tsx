import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

interface Props {
	children?: React.ReactNode;
}

function Layout({ children = undefined }: Props) {
	return (
		<>
			<Navbar />
			<Flex w="full" justifyContent="center">
				<Box maxWidth="5xl" w="full">
					{children && children}
					{!children && <Outlet />}
				</Box>
			</Flex>
		</>
	);
}

export default Layout;
