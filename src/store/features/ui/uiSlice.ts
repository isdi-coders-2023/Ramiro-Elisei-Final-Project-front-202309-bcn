import { createSlice } from "@reduxjs/toolkit";

export interface UiStateStructure {
  isLoading: boolean;
}

const initialState: UiStateStructure = { isLoading: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    showLoawding: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isLoading: true,
    }),
  },
});

export const { showLoawding: showLowdingActionCreator } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
