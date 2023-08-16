import ReactDOM from "react-dom/client";
import {ChakraProvider} from "@chakra-ui/react";
import App from "./App";
import JosefinFontTheme from "./themes/JosefinFontTheme";
import React from "react";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={JosefinFontTheme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
);
