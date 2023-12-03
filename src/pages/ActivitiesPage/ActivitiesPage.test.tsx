import { screen } from "@testing-library/react";
import customRenderProvider from "../../utils/customRenderProvider";
import ActivitiesPage from "./ActivitiesPage";
import activitiesMockData from "../../mocks/activitiesMock";

describe("Given an ActivitiesPage", () => {
  describe("When the page is rendered", () => {
    test("Then it should show the title 'ACTIVITIES' in a heading", () => {
      const expectedHeadingTitle = "activities";
      const mockData = activitiesMockData;

      customRenderProvider(<ActivitiesPage />, mockData);

      const headingTitle = screen.getByRole("heading", {
        name: expectedHeadingTitle,
      });

      expect(headingTitle).toBeInTheDocument();
    });
  });
});
