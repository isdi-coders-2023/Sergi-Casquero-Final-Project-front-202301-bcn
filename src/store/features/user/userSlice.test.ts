import { UserState } from "../../../types/userTypes.js";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a loginUser reducer", () => {
  const userInitialState: UserState = {
    username: "sergi",
    token: "",
    isLogged: false,
  };

  const userToLogIn: UserState = {
    username: "sergi",
    token: "gnkrjbiu45nfkjsd",
    isLogged: false,
  };

  const userLoggedIn: UserState = {
    username: "sergi",
    token: "gnkrjbiu45nfkjsd",
    isLogged: true,
  };

  describe("When it receives a user with isLogged status set on 'false'", () => {
    test("Then it should return that user with its isLogged status set to 'true'", () => {
      const loginUser = loginUserActionCreator(userToLogIn);

      const newUser = userReducer(userInitialState, loginUser);

      expect(newUser).toStrictEqual(userLoggedIn);
    });
  });
});
