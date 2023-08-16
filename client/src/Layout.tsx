import {Outlet} from "react-router-dom";
import IngredientsCard from "./design/IngredientsCard";
import StepsCard from "./design/StepsCard";
import StatsCard from "./design/StatsCard";

function Layout() {
    return (
        <>
            <IngredientsCard/>
            <StepsCard/>
            <StatsCard/>
            <Outlet/>
        </>
    );
}

export default Layout;
