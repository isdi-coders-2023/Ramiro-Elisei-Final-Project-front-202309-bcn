import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActivitiesInitialStructure, ActivityStructure } from "./types";

export const initialActivityState: ActivitiesInitialStructure = {
  activities: [],
};

export const activitiesSlice = createSlice({
  name: "activities",
  initialState: initialActivityState,
  reducers: {
    loadActivities: (
      currentState,
      action: PayloadAction<ActivityStructure[]>,
    ): ActivitiesInitialStructure => ({
      ...currentState,
      activities: action.payload,
    }),

    deleteActivity: (
      currentState: ActivitiesInitialStructure,
      action: PayloadAction<string>,
    ) => ({
      ...currentState,
      activities: currentState.activities.filter(
        (activity) => activity._id !== action.payload,
      ),
    }),
  },
});

export const {
  loadActivities: loadActivitiesActionCreator,
  deleteActivity: deleteActivityActionCreator,
} = activitiesSlice.actions;

export const activitiesReducer = activitiesSlice.reducer;
