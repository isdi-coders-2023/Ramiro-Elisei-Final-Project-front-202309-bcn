import { renderHook } from "@testing-library/react";
import activitiesMockData from "../mocks/activitiesMock";
import useActivitiesApi from "./useActivitiesApi";
import { providerWrapper } from "../utils/providerWrapper";

describe("Given a useActivitiesApi hook", () => {
  describe("When it gets the information of activities", () => {
    test("Then it should return all the activities successfully", async () => {
      const expectedActivities = activitiesMockData;

      const {
        result: {
          current: { getActivities },
        },
      } = renderHook(() => useActivitiesApi(), {
        wrapper: providerWrapper,
      });

      const activities = await getActivities();

      expect(activities).toStrictEqual(expectedActivities);
    });
  });

  describe("When it is called with its deleteActivity function with an activity id", () => {
    test("Then it should delete the 'Absurdity Unleashed Talk'", async () => {
      const expectedActivityId = activitiesMockData[1]._id;
      const expectedResponse = {};

      const {
        result: {
          current: { deleteActivity },
        },
      } = renderHook(() => useActivitiesApi(), { wrapper: providerWrapper });

      const response = await deleteActivity(expectedActivityId);

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
