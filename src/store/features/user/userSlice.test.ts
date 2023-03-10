import { UserState } from "../../../types/userTypes.js";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a loginUser reducer", () => {
  const userInitialState: UserState = {
    token: "",
    isLogged: false,
  };

  const userLoggedIn: UserState = {
    token: "token",
    isLogged: true,
  };

  describe("When it receives a user with isLogged status set on 'false'", () => {
    test("Then it should return that user with its isLogged status set to 'true'", () => {
      const loginUser = loginUserActionCreator("token");

      const newUser = userReducer(userInitialState, loginUser);

      expect(newUser).toStrictEqual(userLoggedIn);
    });
  });
});
