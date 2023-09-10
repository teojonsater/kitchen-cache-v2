/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	Button,
	Card,
	CardBody,
	FormLabel,
	Icon,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import StepField from "./components/StepField";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import type { UseFieldArrayReturn } from "react-hook-form";
import type RecipeForm from "../../interfaces/RecipeForm";

interface Props {
	hookFormFields: UseFieldArrayReturn<RecipeForm, "formSteps">;
	hookFormRegister: any;
}

function StepFieldsContainer({ hookFormFields, hookFormRegister }: Props) {
	return (
		<Card>
			<CardBody>
				<FormLabel>Steg</FormLabel>
				<VStack align="stretch">
					{hookFormFields.fields.map((field, index) => (
						<StepField
							key={field.id}
							index={index}
							hookFormFields={hookFormFields}
							hookFormRegister={hookFormRegister}
						/>
					))}
					<Button
						maxW="fit-content"
						size="sm"
						colorScheme="teal"
						variant="ghost"
						leftIcon={<Icon as={AddRoundedIcon} boxSize="4" />}
						onClick={() => {
							hookFormFields.append({
								formStep: "",
							});
						}}
					>
						Lägg till steg
					</Button>
				</VStack>
			</CardBody>
		</Card>
	);
}

export default StepFieldsContainer;
