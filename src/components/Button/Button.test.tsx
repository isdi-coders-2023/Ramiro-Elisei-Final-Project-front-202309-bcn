import { screen } from "@testing-library/react";
import customRenderProvider from "../../utils/customRenderProvider";
import Button from "./Button";
import activitiesMockData from "../../mocks/activitiesMock";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  const expectedButtonText = "MODIFY";

  describe("When it is rendered with the text 'Modify", () => {
    test("Then it should show a button with the text 'MODIFY' in it", () => {
      const mockData = activitiesMockData;

      customRenderProvider(<Button text="MODIFY" type="button" />, mockData);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toHaveTextContent(expectedButtonText);
    });
  });

  describe("When it is rendered with prop onClick", () => {
    test("Then it should call onClick method when it is clicked", async () => {
      const testAction = vi.fn();

      customRenderProvider(
        <Button
          actionOnClick={testAction}
          disabled={false}
          type="button"
          text={expectedButtonText}
        />,
        activitiesMockData,
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(testAction).toHaveBeenCalledTimes(1);
    });
  });
});
