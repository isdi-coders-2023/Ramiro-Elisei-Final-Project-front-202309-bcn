import { screen } from "@testing-library/react";
import customRenderProvider from "../../utils/customRenderProvider";
import ActivitiesPage from "./ActivitiesPage";

describe("Given an ActivitiesPage", () => {
  describe("When the page is rendered", () => {
    test("Then it should show the title 'ACTIVITIES' in a heading", () => {
      const expectedHeadingTitle = "activities";

      customRenderProvider(<ActivitiesPage />);

      const headingTitle = screen.getByRole("heading", {
        name: expectedHeadingTitle,
      });

      expect(headingTitle).toBeInTheDocument();
    });
  });
});
