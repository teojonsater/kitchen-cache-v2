import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter(
	createRoutesFromElements(<Route path="/" element={<Layout />} />),
);

/* <Route path="/" errorElement={<ErrorPage />} element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/recipes">
        <Route index element={<AllRecipesPage />} />
        <Route path=":recipeId" element={<Recipe />} />
        <Route path="new" element={<CreateRecipePage />} />
    </Route>
    <Route path="/weekmenu">
        <Route index element={<WeekmenuPage />} />
    </Route>
</Route> */

export default router;
