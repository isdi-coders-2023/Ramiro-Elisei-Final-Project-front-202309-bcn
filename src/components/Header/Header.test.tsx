import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import customRenderProvider from "../../utils/customRenderProvider";
import Header from "./Header";
import activitiesMockData from "../../mocks/activitiesMock";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it show LUDIC logo image on the screen", () => {
      const expectedAltText = "Ludic logo";
      const mockData = activitiesMockData;

      customRenderProvider(<Header />, mockData);

      const headerLogo = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
