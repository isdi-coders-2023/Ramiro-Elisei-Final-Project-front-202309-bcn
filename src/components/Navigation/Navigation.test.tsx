import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import customRenderProvider from "../../utils/customRenderProvider";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("It should show a 'Home' link", () => {
      const expetedLinkText = "Home";

      customRenderProvider(<Navigation />);

      const navigationHomeLink = screen.getByRole("link", {
        name: expetedLinkText,
      });

      expect(navigationHomeLink).toBeInTheDocument();
    });
  });
});
