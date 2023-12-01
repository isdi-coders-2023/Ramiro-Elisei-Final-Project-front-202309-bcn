import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActivitiesInitialStructure, ActivityStructure } from "./types";

const initialActivityState: ActivitiesInitialStructure = {
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
  },
});

export const { loadActivities: loadActivitiesActionCreator } =
  activitiesSlice.actions;

export const activitiesReducer = activitiesSlice.reducer;
