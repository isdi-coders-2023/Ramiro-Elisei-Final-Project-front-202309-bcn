import { screen } from "@testing-library/react";
import activitiesMockData from "../../mocks/activitiesMock";
import customRenderProvider from "../../utils/customRenderProvider";
import ActivitiesFormPage from "./ActivitiesFormPage";

describe("Given an ActivitiesFormPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Add activity' in a heading", () => {
      const addActivitiyHeadingText = "Add activity";

      customRenderProvider(<ActivitiesFormPage />, activitiesMockData);

      const addActivityPageHeading = screen.getByRole("heading", {
        name: addActivitiyHeadingText,
      });

      expect(addActivityPageHeading).toBeInTheDocument();
    });
  });
});
