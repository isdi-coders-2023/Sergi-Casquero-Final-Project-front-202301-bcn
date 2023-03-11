import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feedback, UiState } from "../../../types/uiTypes";

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

    showFeedback: (previousUi: UiState, action: PayloadAction<Feedback>) => ({
      ...previousUi,
      feedback: action.payload,
    }),

    hideFeedback: (previousUi: UiState, action: PayloadAction<Feedback>) => ({
      ...previousUi,
      feedback: action.payload,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  showLoader: showLoaderActionCreator,
  closeLoader: closeLoaderActionCreator,
  showFeedback: showFeedbackActionCreator,
  hideFeedback: hideFeedbackActionCreator,
} = uiSlice.actions;
