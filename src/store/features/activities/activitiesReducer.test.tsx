import activitiesMockData from "../../../mocks/activitiesMock";
import {
  activitiesReducer,
  loadActivitiesActionCreator,
} from "./activitiesSlice";
import { ActivitiesInitialStructure } from "./types";

describe("Given an activitiesReducer", () => {
  describe("When it receives an empty list of activities", () => {
    test("Then it should be update with the activities", () => {
      const activitiesList = activitiesMockData;
      const initialActivitiesListState: ActivitiesInitialStructure = {
        activities: [],
      };

      const listStateUpdated = activitiesReducer(
        initialActivitiesListState,
        loadActivitiesActionCreator(activitiesList),
      );

      expect(listStateUpdated.activities).toStrictEqual(activitiesList);
    });
  });
});
