import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import mainTheme from "./Styles/mainTheme";
import GlobalStyle from "./Styles/GlobalStyle";
import App from "./components/App/App";
import "@fontsource/ibm-plex-sans";
import "@fontsource/ibm-plex-sans/400.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
