import { screen } from "@testing-library/react";
import activitiesMockData from "../../mocks/activitiesMock";
import customRenderProvider from "../../utils/customRenderProvider";
import ActivityForm from "./ActivityForm";

describe("Given an Activity Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form with a 'Choose the activity type:'", () => {
      const expectedLabelText = "Choose the activity type:";

      customRenderProvider(<ActivityForm />, activitiesMockData);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Add' inside", () => {
      const expectedTextButton = "Add";

      customRenderProvider(<ActivityForm />, activitiesMockData);

      const button = screen.getByRole("button", {
        name: expectedTextButton,
      });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show some empty inputs", async () => {
      customRenderProvider(<ActivityForm />, activitiesMockData);

      const textElements = screen.getAllByDisplayValue("");

      expect(textElements[0]).toBeInTheDocument();
    });
  });
});
