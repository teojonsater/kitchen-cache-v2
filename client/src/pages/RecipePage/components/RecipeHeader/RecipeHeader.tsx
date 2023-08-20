import React from "react";
import { Heading, HStack, Icon, IconButton, VStack } from "@chakra-ui/react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import StatsCard from "../../../../design/StatsCard";

interface Props {
	title: string;
}

function RecipeHeader({ title }: Props) {
	return (
		<HStack p="8" justify="space-between" align="start">
			<VStack>
				<Heading as="h1" size="2xl">
					{title}
				</Heading>
				<StatsCard />
			</VStack>
			<IconButton
				aria-label="Edit recipe"
				icon={<Icon as={EditRoundedIcon} />}
				variant="link"
			/>
		</HStack>
	);
}

export default RecipeHeader;
