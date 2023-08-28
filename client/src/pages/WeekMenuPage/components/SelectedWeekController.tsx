import React from "react";
import {
	Button,
	ButtonGroup,
	HStack,
	Icon,
	IconButton,
} from "@chakra-ui/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface Props {
	onSelectedWeekNumberDecrease: () => void;
	onSelectedWeekNumberIncrease: () => void;
	onBackToCurrentWeekBtnClick: () => void;
	weekNumber: number;
	currentWeekNumber: number;
}

function SelectedWeekController({
	onSelectedWeekNumberDecrease,
	onSelectedWeekNumberIncrease,
	onBackToCurrentWeekBtnClick,
	weekNumber,
	currentWeekNumber,
}: Props) {
	return (
		<HStack>
			<ButtonGroup size="sm" colorScheme="teal">
				<IconButton
					onClick={() => {
						onSelectedWeekNumberDecrease();
					}}
					aria-label="Previous week"
					icon={<Icon as={KeyboardArrowLeftIcon} />}
					variant="outline"
				/>
				<Button
					w="14"
					onClick={onBackToCurrentWeekBtnClick}
					variant="ghost"
				>
					V. {weekNumber}
				</Button>
				<IconButton
					onClick={onSelectedWeekNumberIncrease}
					aria-label="Next week"
					icon={<Icon as={KeyboardArrowRightIcon} />}
					variant="outline"
				/>
			</ButtonGroup>
		</HStack>
	);
}

export default SelectedWeekController;
