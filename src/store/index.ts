import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { activitiesReducer } from "./features/activities/activitiesSlice";
import { uiReducer } from "./features/ui/uiSlice";

export const rootReducer = combineReducers({
  activities: activitiesReducer,
  uiState: uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
