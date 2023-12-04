import { screen } from "@testing-library/react";
import App from "./App";
import customRenderProvider, {
  customRenderWithoutBrowserRouter,
} from "../../utils/customRenderProvider";
import activitiesMockData from "../../mocks/activitiesMock";
import { MemoryRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'ludic' logo in the header", () => {
      const expectedLogoAltName = "Ludic logo";

      customRenderProvider(<App />, activitiesMockData);

      const logo = screen.getByRole("img", {
        name: expectedLogoAltName,
      });

      expect(logo).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a home path", () => {
    test("Then it should show the text 'Activities' in a heading", () => {
      const expectedHeadingText = "activities";

      customRenderWithoutBrowserRouter(
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
