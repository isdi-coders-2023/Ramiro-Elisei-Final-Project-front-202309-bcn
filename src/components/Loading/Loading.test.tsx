import { screen } from "@testing-library/react";
import activitiesMockData from "../../mocks/activitiesMock";
import customRenderProvider from "../../utils/customRenderProvider";
import Loading from "./Loading";

describe("Given Loading Component", () => {
  describe("When it is rendered correctly", () => {
    test("Then it should show 'Loading' on screen", () => {
      customRenderProvider(<Loading />, activitiesMockData);

      const expectedloadingText = "Load ng";

      const loading = screen.getByText(expectedloadingText);

      expect(loading).toBeInTheDocument();
    });
  });
});
