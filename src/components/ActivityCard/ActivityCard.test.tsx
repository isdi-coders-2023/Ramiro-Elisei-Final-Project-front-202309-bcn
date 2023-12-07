import { screen, waitFor } from "@testing-library/react";
import activitiesMockData from "../../mocks/activitiesMock";
import customRenderProvider from "../../utils/customRenderProvider";
import ActivityCard from "./ActivityCard";
import userEvent from "@testing-library/user-event";
import handlersError from "../../mocks/handlersError";
import { server } from "../../mocks/node";

describe("Given an ActivityCard component", () => {
  const mockData = activitiesMockData;

  describe("When is rendered with 'Generative plant gadering' activity", () => {
    test("Then it should show 'Steve Green and Lia Rasmussen' as leds", () => {
      const expectedName = activitiesMockData[0].activityName;

      customRenderProvider(
        <ActivityCard activity={activitiesMockData[0]} />,
        mockData,
      );

      const heading = screen.getByRole("heading", {
        name: expectedName,
      });

      expect(heading.textContent).toBe(expectedName);
    });

    test("Then it should show 'Generative plant gadering' image on screen", () => {
      const expectedAltText = activitiesMockData[0].activityName;
      const mockData = activitiesMockData;

      customRenderProvider(
        <ActivityCard activity={activitiesMockData[0]} />,
        mockData,
      );

      const imageCard = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(imageCard).toBeInTheDocument();
    });

    test("Then it should show a success feedback message 'The activity was successfully deleted'", async () => {
      const expectedButtonText = "Delete";
      const expectedSuccesMessage = "The activity was successfully deleted";

      customRenderProvider(
        <ActivityCard activity={activitiesMockData[0]} />,
        mockData,
      );

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(deleteButton);

      expect(screen.getByText(expectedSuccesMessage)).toBeInTheDocument();
    });

    test("Then it should show a unsuccess feedback message 'Sorry, the activity could not be deleted'", async () => {
      server.use(...handlersError);
      const expectedButtonText = "Delete";
      const expectedUnsuccesMessage =
        "Sorry, the activity could not be deleted";

      customRenderProvider(
        <ActivityCard activity={activitiesMockData[1]} />,
        mockData,
      );

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(deleteButton);

      await waitFor(() => {
        expect(screen.getByText(expectedUnsuccesMessage)).toBeInTheDocument();
      });
    });
  });
});
