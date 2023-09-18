/* eslint-disable @typescript-eslint/naming-convention */
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/yeseva-one";
import "@fontsource-variable/outfit";

const fonts = {
	heading: `"Yeseva One", sans-serif`,
	body: `"Outfit Variable", sans-serif`,
};

const fontWeights = {
	thin: 100,
	extraLight: 200,
	light: 300,
	normal: 350,
	medium: 500,
	semiBold: 600,
	bold: 700,
	extraBold: 800,
	black: 900,
};

const overrides = {
	fonts,
	fontWeights,
	styles: {
		global: {
			b: {
				fontWeight: "semiBold",
			},
			body: {
				fontWeight: "normal",
				backgroundColor: "gray.50",
			},
		},
	},
	components: {
		Button: {
			baseStyle: {
				fontWeight: "medium",
			},
		},
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
				fontWeight: "semiBold",
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
};

export default extendTheme(overrides);
