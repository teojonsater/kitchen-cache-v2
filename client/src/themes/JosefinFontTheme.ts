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
				background:
					"url(https://s2.svgbox.net/pen-brushes.svg?ic=brush-8&color=B2F5EA) no-repeat center center / 100% 100%",
			},
		},
		Heading: {
			baseStyle: {
				fontWeight: "normal",
			},
			variants: {
				highlighted: {
					p: "0.3em 1em",
					m: "-0.3em -1em",
					background:
						"url(https://s2.svgbox.net/pen-brushes.svg?ic=brush-8&color=B2F5EA) no-repeat center center / 100% 100%",
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
