import { createSlice } from "@reduxjs/toolkit";
import { uiState } from "../../../types/uiTypes";

const uiInitialState: uiState = {
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
    showLoader: (previousUi: uiState) => ({
      ...previousUi,
      isLoadingShowing: true,
    }),

    closeLoader: (previousUi: uiState) => ({
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
