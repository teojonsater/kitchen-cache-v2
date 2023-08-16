import {Outlet} from "react-router-dom";
import IngredientsCard from "./design/IngredientsCard";
import StepsCard from "./design/StepsCard";

function Layout() {
    return (
        <>
            <IngredientsCard/>
            <StepsCard/>
            <Outlet/>
        </>
    );
}

export default Layout;
