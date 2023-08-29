import {
	FormControl,
	Grid,
	GridItem,
	HStack,
	Icon,
	IconButton,
	Input,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Select,
} from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React from "react";
import SubdirectoryArrowRightRoundedIcon from "@mui/icons-material/SubdirectoryArrowRightRounded";
import { measurementsArray } from "../../../utils/measurements";

interface Props {
	showArrow?: boolean;
	indent?: boolean;
}

function IngredientField({ showArrow = false, indent = false }: Props) {
	return (
		<HStack>
			{showArrow && (
				<Icon as={SubdirectoryArrowRightRoundedIcon} boxSize="4" />
			)}
			<HStack w="full" ml={indent ? "6" : undefined}>
				<Grid templateColumns="repeat(9, 1fr)" gap="2" w="full">
					<GridItem colSpan={2}>
						<FormControl>
							<NumberInput size="sm">
								<NumberInputField placeholder="mängd" />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</FormControl>
					</GridItem>
					<GridItem colSpan={2}>
						<FormControl>
							<Select size="sm">
								{measurementsArray.map((measurement, index) => (
									<option key={index} value={measurement}>
										{measurement}
									</option>
								))}
							</Select>
						</FormControl>
					</GridItem>
					<GridItem colSpan={5}>
						<FormControl>
							<Input size="sm" placeholder="Ingrediens" />
						</FormControl>
					</GridItem>
				</Grid>
				<IconButton
					size="sm"
					aria-label="Delete Step"
					variant="ghost"
					borderRadius="full"
					icon={<Icon as={CloseRoundedIcon} boxSize="3" />}
				/>
			</HStack>
		</HStack>
	);
}

export default IngredientField;
