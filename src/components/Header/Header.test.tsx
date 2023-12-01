import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import customRenderProvider from "../../utils/customRenderProvider";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it show LUDIC logo image on the screen", () => {
      const expectedAltText = "Ludic logo";

      customRenderProvider(<Header />);

      const headerLogo = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
