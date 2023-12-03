import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActivitiesInitialStructure, ActivityStructure } from "./types";
import axios from "axios";

export const initialActivityState: ActivitiesInitialStructure = {
  activities: [],
};

export const getActivities = createAsyncThunk(
  "activities/getActivities",
  async (_data, { dispatch }) => {
    const baseURL = import.meta.env.VITE_API_URL;
    const { loadActivities } = activitiesSlice.actions;
    const response = await axios(`${baseURL}/activities`);
    dispatch(loadActivities(response.data.activities));
  },
);

export const activitiesSlice = createSlice({
  name: "activities",
  initialState: initialActivityState,
  reducers: {
    loadActivities: (
      currentState,
      action: PayloadAction<ActivityStructure[]>,
    ): ActivitiesInitialStructure => {
      return {
        ...currentState,
        activities: action.payload,
      };
    },
  },
});

export const { loadActivities: loadActivitiesActionCreator } =
  activitiesSlice.actions;

export const activitiesReducer = activitiesSlice.reducer;
