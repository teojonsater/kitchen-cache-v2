import {Outlet} from "react-router-dom";
import IngredientsCard from "./design/IngredientsCard";
import Navbar from "./design/Navbar";
import {Box, Flex} from "@chakra-ui/react";
import StepsCard from "./design/StepsCard";
import StatsCard from "./design/StatsCard";
import DescriptionCard from "./design/DescriptionCard";

function Layout() {
    return (
        <>
            <Flex w="full" justifyContent="center">
                <Box maxWidth="4xl" w="full" bgColor="white">
                    <Navbar/>
                    <IngredientsCard/>
                    <StepsCard/>
                    <StatsCard/>
                    <DescriptionCard/>
                    <Outlet/>
                </Box>
            </Flex>
        </>
    );
}

export default Layout;
