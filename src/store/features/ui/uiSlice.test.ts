import { uiState } from "../../../types/uiTypes";
import { uiReducer } from "./uiSlice";

const previousUiPayload: uiState = {
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
