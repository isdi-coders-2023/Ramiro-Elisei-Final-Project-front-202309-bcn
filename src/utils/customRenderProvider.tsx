import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import mainTheme from "../Styles/mainTheme";
import GlobalStyle from "../Styles/GlobalStyle";

const customRenderProvider = (children: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      <GlobalStyle />
    </BrowserRouter>,
  );
};
export default customRenderProvider;
