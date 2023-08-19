import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import JosefinFontTheme from "./themes/JosefinFontTheme";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<React.StrictMode>
		<ChakraProvider theme={JosefinFontTheme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
);
