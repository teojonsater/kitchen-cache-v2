/* eslint-disable @typescript-eslint/naming-convention */
import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/josefin-sans";

const JosefinFontTheme = extendTheme({
	fonts: {
		heading: `"Josefin Sans Variable", sans-serif`,
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
			},
		},
	},
	components: {
		Heading: {
			baseStyle: {
				fontWeight: "semiBold",
			},
		},
	},
});

export default JosefinFontTheme;
