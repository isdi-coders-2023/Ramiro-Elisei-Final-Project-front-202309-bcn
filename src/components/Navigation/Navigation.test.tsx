import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import customRenderProvider from "../../utils/customRenderProvider";
import activitiesMockData from "../../mocks/activitiesMock";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("It should show a 'Home' link", () => {
      const expetedLinkText = "Home";
      const mockData = activitiesMockData;

      customRenderProvider(<Navigation />, mockData);

      const navigationHomeLink = screen.getByRole("link", {
        name: expetedLinkText,
      });

      expect(navigationHomeLink).toBeInTheDocument();
    });
  });
});
