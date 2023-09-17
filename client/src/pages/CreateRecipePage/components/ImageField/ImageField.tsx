/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	AspectRatio,
	Button,
	Card,
	CardBody,
	FormControl,
	FormErrorMessage,
	GridItem,
	Image,
	Input,
	SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";
import type { useForm } from "react-hook-form";

interface Props {
	hookFormControl: any;
	hookFormErrors: ReturnType<typeof useForm>["formState"]["errors"];
	imageFile: File | undefined;
}

function ImageField({ hookFormControl, hookFormErrors, imageFile }: Props) {
	return (
		<Card>
			<CardBody>
				<SimpleGrid columns={2} spacing="4">
					<GridItem>
						<FormControl isInvalid={!!hookFormErrors.formImage}>
							<Controller
								control={hookFormControl}
								name="formImage"
								render={({
									field: { value, onChange, ...field },
								}) => {
									return (
										<>
											<Input
												type="file"
												value={value?.fileName}
												onChange={(event) => {
													onChange(
														event.target.files?.[0],
													);
												}}
												display="none"
												id="formImage"
												accept="image/png, image/jpeg"
												{...field}
											/>
											<label htmlFor="formImage">
												<AspectRatio ratio={16 / 9}>
													<Button
														w="full"
														variant="link"
														h="full"
														border="2px dashed"
														borderColor="gray.200"
														as="span"
														cursor="pointer"
													>
														Ladda upp bild
													</Button>
												</AspectRatio>
											</label>
										</>
									);
								}}
							/>
							{hookFormErrors && hookFormErrors.formImage && (
								<FormErrorMessage>
									{hookFormErrors.formImage?.message?.toString()}
								</FormErrorMessage>
							)}
						</FormControl>
					</GridItem>
					<GridItem>
						<AspectRatio ratio={16 / 9}>
							<Image
								src={
									imageFile
										? URL.createObjectURL(imageFile)
										: "https://assets.icanet.se/e_sharpen:80,f_auto,q_auto,dpr_2,w_710,h_710,c_lfill/v1589267894/Receptsidan/fallback-receptbild-liten.jpg"
								}
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
