import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserStructure from "../../../types/userTypes.js";

const intitialUserState = {} as UserStructure;

const userSlice = createSlice({
  name: "user",
  initialState: intitialUserState,
  reducers: {
    loginUser: (
      currentUserState: UserStructure,
      action: PayloadAction<UserStructure>
    ) => ({ ...action.payload, isLogged: true }),
  },
});

export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
