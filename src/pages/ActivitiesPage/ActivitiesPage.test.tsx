import { screen, waitFor } from "@testing-library/react";
import customRenderProvider from "../../utils/customRenderProvider";
import ActivitiesPage from "./ActivitiesPage";
import activitiesMockData from "../../mocks/activitiesMock";
import handlersError from "../../mocks/handlersError";
import { server } from "../../mocks/node";

describe("Given an ActivitiesPage", () => {
  describe("When the page is rendered", () => {
    test("Then it should show the title 'ACTIVITIES' in a heading", () => {
      const expectedHeadingTitle = "activities";

      customRenderProvider(<ActivitiesPage />, activitiesMockData);

      const headingTitle = screen.getByRole("heading", {
        name: expectedHeadingTitle,
      });

      expect(headingTitle).toBeInTheDocument();
    });
  });

  describe("When an error occurs while loading activities once the Home page is rendered", () => {
    test("Then it should show toastify notification message: 'I apologize, but we were unable to retrieve the activities.'", async () => {
      const expectedTextError =
        "I apologize, but we were unable to retrieve the activities.";
      server.use(...handlersError);

      customRenderProvider(<ActivitiesPage />, activitiesMockData);

      await waitFor(() => {
        expect(screen.getByText(expectedTextError)).toBeInTheDocument();
      });
    });
  });
});
