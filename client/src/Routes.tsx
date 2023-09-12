import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import RecipePage from "./pages/RecipePage";
import CreateRecipePage from "./pages/CreateRecipePage";
import { Heading } from "@chakra-ui/react";
import AllRecipesPage from "./pages/AllRecipesPage";
import WeekMenuPage from "./pages/WeekMenuPage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}
			errorElement={
				<Layout>
					<Heading>404</Heading>
				</Layout>
			}
		>
			<Route index element={<Navigate to="/recipe" replace />} />
			<Route path="recipe" element={<RecipePage />} />
			<Route path="recipes">
				<Route index element={<AllRecipesPage />} />
				<Route path="new" element={<CreateRecipePage />} />
			</Route>
			<Route path="weekmenu" element={<WeekMenuPage />} />
		</Route>,
	),
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
