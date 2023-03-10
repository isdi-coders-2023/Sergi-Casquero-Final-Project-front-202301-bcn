import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "../../../types/uiTypes";

const uiInitialState: UiState = {
  isLoadingShowing: false,
  feedback: {
    message: "",
    isSuccess: true,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    showLoader: (previousUi: UiState) => ({
      ...previousUi,
      isLoadingShowing: true,
    }),

    closeLoader: (previousUi: UiState) => ({
      ...previousUi,
      isLoadingShowing: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  showLoader: showLoaderActionCreator,
  closeLoader: closeLoaderActionCreator,
} = uiSlice.actions;
