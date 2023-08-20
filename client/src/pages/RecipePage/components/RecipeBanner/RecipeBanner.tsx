import React from "react";
import { AspectRatio, Image } from "@chakra-ui/react";

interface Props {
	image: string;
}

function RecipeBanner({ image }: Props) {
	return (
		<AspectRatio ratio={16 / 9}>
			<Image src={image} objectFit="cover" borderRadius="md" />
		</AspectRatio>
	);
}

export default RecipeBanner;
