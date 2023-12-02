import { fireEvent, screen } from "@testing-library/react";
import customRenderProvider from "../../utils/customRenderProvider";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered with the text 'Modify", () => {
    test("Then it should show a button with the text 'MODIFY' in it", () => {
      customRenderProvider(
        <Button text="MODIFY" type="button" actionOnClick={() => {}} />,
      );

      const expectedButtonText = "MODIFY";
      const button = screen.getByRole("button");

      expect(button).toHaveTextContent(expectedButtonText);
    });

    describe("When it is rendered with prop onClick", () => {
      test("Then it should call onClick method when it is clicked", () => {
        const testAction = vi.fn();

        customRenderProvider(
          <Button
            actionOnClick={testAction}
            disabled={false}
            type={"button"}
            text={""}
          />,
        );

        fireEvent.click(screen.getByRole("button"));

        expect(testAction).toHaveBeenCalledTimes(1);
      });
    });
  });
});
