import { screen } from "@testing-library/react";
import customRenderProvider from "../../utils/customRenderProvider";
import ActivitiesList from "./ActivitiesList";
import activitiesMockData from "../../mocks/activitiesMock";

describe("Given an ActivitiesList component", () => {
  describe("When the MechasList it is render", () => {
    test("Then it should show as first position the heading 'Generative plant gadering'", () => {
      const expectedActivityName = "Generative plant gadering";
      const mockData = activitiesMockData;

      customRenderProvider(
        <ActivitiesList activities={activitiesMockData} />,
        mockData,
      );

      const activityName = screen.getByRole("heading", {
        name: expectedActivityName,
      });

      expect(activityName).toBeInTheDocument();
    });

    test("Then should appear as a second position the alternative picture name 'Absurdity Unleashed Talk'", () => {
      const expectedAltText = activitiesMockData[1].activityName;
      const mockData = activitiesMockData;

      customRenderProvider(
        <ActivitiesList activities={activitiesMockData} />,
        mockData,
      );

      const imageAltText = screen.getByAltText(expectedAltText);

      expect(imageAltText).toBeInTheDocument();
    });
  });
});
