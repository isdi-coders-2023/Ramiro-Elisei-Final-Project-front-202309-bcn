import activitiesMockData from "../../../mocks/activitiesMock";
import {
  activitiesReducer,
  deleteActivityActionCreator,
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

  describe("When it receives a list of activities, a valid activity id and the action deleteActivity", () => {
    test("Then it should return the list of hotels without the activity 'Generative plant gadering'", () => {
      const initialState: ActivitiesInitialStructure = {
        activities: activitiesMockData,
      };
      const expectedDeleteActivity = "Generative plant gadering";
      const expectedActivityId = "656493fa44b5521c2584c216";

      const currentActivityState = activitiesReducer(
        initialState,
        deleteActivityActionCreator(expectedActivityId),
      );

      currentActivityState.activities.forEach((activity) => {
        expect(activity).not.toHaveProperty("name", expectedDeleteActivity);
      });
    });
  });
});
