/* eslint-disable @typescript-eslint/naming-convention */
import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/josefin-sans";
import "@fontsource/yeseva-one";

const JosefinFontTheme = extendTheme({
	fonts: {
		heading: `"Yeseva One", sans-serif`,
		body: `"Josefin Sans Variable", sans-serif`,
	},
	fontWeights: {
		thin: 100,
		extraLight: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semiBold: 600,
		bold: 700,
	},
	styles: {
		global: {
			b: {
				fontWeight: "bold",
			},
			body: {
				fontWeight: "normal",
				backgroundColor: "gray.50",
			},
		},
	},
	components: {
		Mark: {
			baseStyle: {
				borderRadius: "0.8em 0.3em",
				background: "transparent",
				backgroundImage:
					"linear-gradient(to right, rgba(56, 178, 172, 0.1), rgba(56, 178, 172, 0.7) 4%, rgba(56, 178, 172, 0.3))",
				boxDecorationBreak: "clone",
			},
		},
		Heading: {
			baseStyle: {
				fontWeight: "normal",
			},
			variants: {
				highlighted: {
					width: "50%",
					minW: "fit-content",
					textAlign: "center",
					padding: "0.4em 1em",
					borderRadius: "0.8em 0.3em",
					background: "transparent",
					backgroundImage:
						"linear-gradient(to right, rgba(56, 178, 172, 0.1), rgba(56, 178, 172, 0.7) 4%, rgba(56, 178, 172, 0.3))",
					boxDecorationBreak: "clone",
				},
			},
		},
		FormLabel: {
			baseStyle: {
				fontWeight: "bold",
				color: "teal.400",
			},
		},
		Input: {
			defaultProps: {
				focusBorderColor: "teal.500",
			},
		},
		Textarea: {
			defaultProps: {
				focusBorderColor: "teal.500",
			},
		},
		NumberInput: {
			defaultProps: {
				focusBorderColor: "teal.500",
			},
		},
	},
});

export default JosefinFontTheme;
