import { Feedback, UiState } from "../../../types/uiTypes";
import {
  hideFeedbackActionCreator,
  showFeedbackActionCreator,
  uiReducer,
} from "./uiSlice";

const previousUiPayload: UiState = {
  isLoadingShowing: false,
  feedback: {
    message: "",
    isSuccess: true,
  },
};

const initialUi: UiState = {
  isLoadingShowing: false,
  feedback: {
    message: "",
    isSuccess: true,
  },
};

describe("Given a showLoader reducer", () => {
  describe("When it receives a previous state with isLoadingShowing on false", () => {
    test("Then it should return the same state with isLoadingShowing property set to true", () => {
      const uiPayload = {
        type: "ui/showLoader",
      };

      const expectedUiState = {
        isLoadingShowing: true,
        feedback: {
          message: "",
          isSuccess: true,
        },
      };

      const newUi = uiReducer(previousUiPayload, uiPayload);

      expect(newUi).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given a closeLoader reducer", () => {
  describe("When it receives a previous state with isLoadingShowing on true", () => {
    test("Then it should return the same state with isLoadingShowing property set to false", () => {
      const uiPayload = {
        type: "ui/closeLoader",
      };

      const expectedUi = {
        isLoadingShowing: false,
        feedback: {
          message: "",
          isSuccess: true,
        },
      };

      const newUi = uiReducer(previousUiPayload, uiPayload);

      expect(newUi).toStrictEqual(expectedUi);
    });
  });
});

describe("Given a 'showFeedback' reducer", () => {
  describe("When it is called with the feedback text 'Invalid credentials. Please try again.'", () => {
    test("Then it should show a feedback text 'Invalid credentials. Please try again.'", () => {
      const feedbackText: Feedback = {
        message: "Invalid credentials. Please try again.",
        isSuccess: false,
      };

      const expectedUiState: UiState = {
        isLoadingShowing: false,
        feedback: feedbackText,
      };

      const previousUiAction = showFeedbackActionCreator(feedbackText);
      const newFeedbackText = uiReducer(initialUi, previousUiAction);

      expect(newFeedbackText).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given a 'hideFeedback' reducer", () => {
  describe("When it is called with the feedback text 'Invalid credentials. Please try again.'", () => {
    test("Then it should't show a feedback text 'Invalid credentials. Please try again.'", () => {
      const feedbackText: Feedback = {
        message: "",
        isSuccess: false,
      };

      const expectedUiState: UiState = {
        isLoadingShowing: false,
        feedback: {
          message: "",
          isSuccess: false,
        },
      };

      const previousUiAction = hideFeedbackActionCreator(feedbackText);
      const newFeedbackText = uiReducer(initialUi, previousUiAction);

      expect(expectedUiState).toStrictEqual(newFeedbackText);
    });
  });
});
