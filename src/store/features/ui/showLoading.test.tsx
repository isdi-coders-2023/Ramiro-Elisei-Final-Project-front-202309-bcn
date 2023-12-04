import {
  UiStateStructure,
  showLowdingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading uiReducer", () => {
  describe("When it receives the action show the Loading", () => {
    test("Then it should change the Loading state into true", () => {
      const expectedIsLoading: UiStateStructure = {
        isLoading: true,
      };

      const currentState: UiStateStructure = { isLoading: false };

      const isLoadingState = uiReducer(
        currentState,
        showLowdingActionCreator(),
      );

      expect(isLoadingState).toStrictEqual(expectedIsLoading);
    });
  });
});
