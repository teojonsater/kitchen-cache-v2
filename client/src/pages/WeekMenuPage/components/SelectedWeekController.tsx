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
			<ButtonGroup isAttached variant="outline">
				<IconButton
					onClick={() => {
						onSelectedWeekNumberDecrease();
					}}
					aria-label="Previous week"
					icon={<Icon as={KeyboardArrowLeftIcon} />}
				/>
				<Button w={"32"}>
					{currentWeekNumber === weekNumber
						? "Denna vecka"
						: `V. ${weekNumber}`}
				</Button>
				<IconButton
					onClick={onSelectedWeekNumberIncrease}
					aria-label="Next week"
					icon={<Icon as={KeyboardArrowRightIcon} />}
				/>
			</ButtonGroup>
			{currentWeekNumber !== weekNumber && (
				<Button onClick={onBackToCurrentWeekBtnClick} variant="outline">
					Tillbaka till denna vecka
				</Button>
			)}
		</HStack>
	);
}

export default SelectedWeekController;
