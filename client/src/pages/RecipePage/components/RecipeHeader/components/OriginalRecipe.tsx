import React from "react";
import isValidHttpUrl from "../../../../../utils/isValidHttpUrl";
import { Icon, Link, Text } from "@chakra-ui/react";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

interface Props {
	originalRecipe: string;
}

function OriginalRecipe({ originalRecipe }: Props) {
	return (
		<>
			{isValidHttpUrl(originalRecipe) && (
				<Link
					href={originalRecipe}
					isExternal
					color="teal.500"
					fontSize="sm"
				>
					Originalrecept
					<Icon as={OpenInNewRoundedIcon} boxSize={4} />
				</Link>
			)}
			{!isValidHttpUrl(originalRecipe) && (
				<Text fontSize="sm">Originalrecept: {originalRecipe}</Text>
			)}
		</>
	);
}

export default OriginalRecipe;
