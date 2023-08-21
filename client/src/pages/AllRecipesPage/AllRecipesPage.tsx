import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import type RecipeObject from "../../interfaces/recipe/RecipeObject";
import SummaryCard from "./components/SummaryCard";
import { v4 as uuid } from "uuid";

function AllRecipesPage() {
	const [recipe] = React.useState<RecipeObject>({
		cookingTime: 60,
		createdAt: new Date(),
		desc: "Supergoda kakor med citron och krispiga vallmofrön och smak av vanilj. Perfekt som gå bort-present om du lyckas hålla dig ifrån att äta alla själv! Receptet är publicerat i samarbete med boken Blåbärssnår, äppelskrutt och rabarberskugga.",
		id: uuid(),
		image: "https://www.fikarutan.com/wp-content/uploads/2020/03/zaLz5hHaSz5mB563j5Itw-750x400.jpg",
		ingredientGroups: [
			{
				ingredients: [
					{
						amount: 2,
						measurement: "msk",
						name: "Finrivet citronskal",
					},
					{
						amount: 1,
						measurement: "msk",
						name: "Strö- eller rårörsocker",
					},
					{
						amount: 200,
						measurement: "g",
						name: "Kylskåpskallt smör",
					},
					{
						amount: 100,
						measurement: "g",
						name: "Strö- eller mixat rårörsocker (100 g motsvarar ca 1,5 dl)",
					},
					{
						amount: 1,
						measurement: "tsk",
						name: "Vaniljsocker",
					},
					{
						amount: 270,
						measurement: "g",
						name: "siktat dinkel- eller vetemjöl (270 g motsvarar 4 1/2 dl)",
					},
					{
						amount: 2,
						measurement: "krm",
						name: "Flingsalt",
					},
					{
						amount: 0,
						measurement: "-",
						name: "Vita eller blå vallmofrön",
					},
				],
			},
		],
		originalRecipe:
			"https://www.ica.se/recept/citron-och-vallmokakor-723833/",
		servings: 10,
		steps: [
			"Mosa ihop citronskal och 1 msk strösocker (för 40-50 st) med en gaffel.",
			"Tärna smöret. Om du använder rörsocker mixa det till ett fint pulver i en matberedare. Lägg alla ingredienser utom vallmofröna i en bunke. Knåda ihop till en deg. Slå in i bakplåtspapper och låt vila i kylen i 2–3 timmar.",
			"Sätt ugnen till 225°C.",
			"Ta ut degen ur kylen och knåda den ordentligt så den blir smidig igen. Dela degen i två bitar och rulla ut dem till längder, ca 4 cm i diameter.",
			"Lägg vallmofröna på en plåt. Rulla längderna i fröna och tryck till lätt så de fastnar. Skär längderna i ca 1 cm tjocka skivor och placera dem med jämna mellanrum på en bakpappersklädd plåt.",
			"Grädda kakorna i mitten av ugnen i ca 10 minuter, tills de får fin färg.",
			"Låt kakorna svalna på plåten. Förvara i en lufttätburk i skafferiet.",
		],
		name: "Citron och vallmokakor",
	});

	const [allRecipes] = React.useState<RecipeObject[]>([
		recipe,
		recipe,
		recipe,
		recipe,
		recipe,
		recipe,
		recipe,
	]);

	return (
		<SimpleGrid minChildWidth="xs" spacing={8}>
			{allRecipes.map((recipe, index) => (
				<SummaryCard
					name={recipe.name}
					cookingTime={recipe.cookingTime}
					ingredientGroups={recipe.ingredientGroups}
					image={recipe.image}
					key={index}
				/>
			))}
		</SimpleGrid>
	);
}

export default AllRecipesPage;
