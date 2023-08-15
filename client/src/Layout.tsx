import {Outlet} from "react-router-dom";
import IngredientsCard from "./design/IngredientsCard";

function Layout() {
    return (
        <>
            <IngredientsCard/>
            <Outlet/>
        </>
    );
}

export default Layout;
