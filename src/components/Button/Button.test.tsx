import { fireEvent, screen } from "@testing-library/react";
import customRenderProvider from "../../utils/customRenderProvider";
import Button from "./Button";
import activitiesMockData from "../../mocks/activitiesMock";

describe("Given a Button component", () => {
  describe("When it is rendered with the text 'Modify", () => {
    test("Then it should show a button with the text 'MODIFY' in it", () => {
      const mockData = activitiesMockData;
      customRenderProvider(
        <Button text="MODIFY" type="button" actionOnClick={() => {}} />,
        mockData,
      );

      const expectedButtonText = "MODIFY";
      const button = screen.getByRole("button");

      expect(button).toHaveTextContent(expectedButtonText);
    });

    describe("When it is rendered with prop onClick", () => {
      test("Then it should call onClick method when it is clicked", () => {
        const testAction = vi.fn();
        const mockData = activitiesMockData;

        customRenderProvider(
          <Button
            actionOnClick={testAction}
            disabled={false}
            type={"button"}
            text={""}
          />,
          mockData,
        );

        fireEvent.click(screen.getByRole("button"));

        expect(testAction).toHaveBeenCalledTimes(1);
      });
    });
  });
});
