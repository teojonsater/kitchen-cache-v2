import {
	AspectRatio,
	Button,
	Card,
	CardBody,
	GridItem,
	Image,
	SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

function ImageField() {
	return (
		<Card>
			<CardBody>
				<SimpleGrid columns={2} spacing="4">
					<GridItem>
						<Button
							w="full"
							variant="link"
							h="full"
							border="2px dashed"
							borderColor="gray.200"
						>
							Ladda upp bild
						</Button>
					</GridItem>
					<GridItem>
						<AspectRatio ratio={16 / 9}>
							<Image
								src="https://hips.hearstapps.com/hmg-prod/images/delish-202002-pozole-0392-landscape-pf-1582315071.jpg?crop=1xw:0.8441943127962085xh;center,top&resize=1200:*"
								alt="Receptbild"
								objectFit="cover"
								borderRadius="md"
							/>
						</AspectRatio>
					</GridItem>
				</SimpleGrid>
			</CardBody>
		</Card>
	);
}

export default ImageField;
