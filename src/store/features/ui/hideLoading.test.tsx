import {
  UiStateStructure,
  hideLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a hideLoading uiReducer", () => {
  describe("When it receives the action of hideLoading", () => {
    test("then it should return the new state with false", () => {
      const initialState: UiStateStructure = { isLoading: true };

      const newUistate = uiReducer(initialState, hideLoadingActionCreator());

      expect(newUistate.isLoading).toBeFalsy();
    });
  });
});
