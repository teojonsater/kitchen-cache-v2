/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Card, CardBody, Divider, FormLabel, VStack } from "@chakra-ui/react";
import IngredientGroupFieldsContainer from "./components/IngredientGroupFieldsContainer";

interface Props {
	hookFormControl: any;
	hookFormRegister: any;
}

function IngredientsContainer({ hookFormControl, hookFormRegister }: Props) {
	return (
		<Card>
			<CardBody>
				<FormLabel>Ingredienser</FormLabel>
				<VStack align="stretch" spacing="4" divider={<Divider />}>
					<IngredientGroupFieldsContainer
						hookFormControl={hookFormControl}
						hookFormRegister={hookFormRegister}
					/>
				</VStack>
			</CardBody>
		</Card>
	);
}

export default IngredientsContainer;
