import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../types/userTypes.js";

const intitialUserState: UserState = {
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: intitialUserState,
  reducers: {
    loginUser: (
      currentUserState: UserState,
      action: PayloadAction<string>
    ): UserState => ({
      ...currentUserState,
      token: action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
