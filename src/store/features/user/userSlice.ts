import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../types/userTypes.js";

const intitialUserState: UserState = {
  username: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: intitialUserState,
  reducers: {
    loginUser: (
      currentUserState: UserState,
      action: PayloadAction<UserState>
    ): UserState => ({
      ...currentUserState,
      token: action.payload.token,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
