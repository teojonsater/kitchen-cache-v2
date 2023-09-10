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
import type RecipeForm from "../../interfaces/RecipeForm";
import { useFieldArray } from "react-hook-form";

interface Props {
	hookFormControl: any;
	hookFormRegister: any;
}

function StepFieldsContainer({ hookFormControl, hookFormRegister }: Props) {
	const formStepFields = useFieldArray<RecipeForm>({
		control: hookFormControl,
		name: "formSteps",
	});

	return (
		<Card>
			<CardBody>
				<FormLabel>Steg</FormLabel>
				<VStack align="stretch">
					{formStepFields.fields.map((field, index) => (
						<StepField
							key={field.id}
							index={index}
							formStepFields={formStepFields}
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
							formStepFields.append({
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
