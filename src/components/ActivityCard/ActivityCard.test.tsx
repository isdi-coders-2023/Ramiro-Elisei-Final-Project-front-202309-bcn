import { screen } from "@testing-library/react";
import activitiesMockData from "../../mocks/activitiesMock";
import customRenderProvider from "../../utils/customRenderProvider";
import ActivityCard from "./ActivityCard";

describe("Given an ActivityCard component", () => {
  describe("When is rendered with 'Generative plant gadering' activity", () => {
    test("Then it should show 'Steve Green and Lia Rasmussen' as leds", () => {
      const expectedName = activitiesMockData[0].activityName;

      customRenderProvider(<ActivityCard activity={activitiesMockData[0]} />);

      const heading = screen.getByText(expectedName);

      expect(heading.textContent).toBe(expectedName);
    });

    test("Then it should 'Generative plant gadering' image on screen", () => {
      const expectedAltText = activitiesMockData[0].activityName;

      customRenderProvider(<ActivityCard activity={activitiesMockData[0]} />);

      const imageCard = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(imageCard).toBeInTheDocument();
    });
  });
});
