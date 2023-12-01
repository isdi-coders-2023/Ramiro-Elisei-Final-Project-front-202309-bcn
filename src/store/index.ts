import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { activitiesReducer } from "./features/activities/activitiesSlice";

export const store = configureStore({
  reducer: {
    activitiesState: activitiesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
