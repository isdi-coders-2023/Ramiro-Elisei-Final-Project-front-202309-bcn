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
});
