import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../Styles/mainTheme";
import App from "../App/App";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it show LUDIC logo image on the screen", () => {
      const expectedAltText = "Ludic logo";

      render(
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>,
      );

      const headerLogo = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
