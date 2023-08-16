import {Outlet} from "react-router-dom";
import IngredientsCard from "./design/IngredientsCard";
import StepsCard from "./design/StepsCard";
import StatsCard from "./design/StatsCard";
import DescriptionCard from "./design/DescriptionCard";

function Layout() {
    return (
        <>
            <IngredientsCard/>
            <StepsCard/>
            <StatsCard/>
            <DescriptionCard/>
            <Outlet/>
        </>
    );
}

export default Layout;
