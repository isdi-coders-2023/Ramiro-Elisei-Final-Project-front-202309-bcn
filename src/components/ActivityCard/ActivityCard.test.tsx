import { screen } from "@testing-library/react";
import activitiesMockData from "../../mocks/activitiesMock";
import customRenderProvider from "../../utils/customRenderProvider";
import ActivityCard from "./ActivityCard";

describe("Given an ActivityCard component", () => {
  describe("When is rendered with 'Generative plant gadering' activity", () => {
    test("Then it should show 'Steve Green and Lia Rasmussen' as leds", () => {
      const expectedName = activitiesMockData[0].activityName;
      const mockData = activitiesMockData;

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
  });
});
