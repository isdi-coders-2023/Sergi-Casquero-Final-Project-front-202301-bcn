import UserStructure from "../../../types/userTypes.js";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a loginUser reducer", () => {
  const userInitialState: UserStructure = {
    username: "",
    token: "",
    email: "",
    isLogged: false,
  };

  const userToLogIn: UserStructure = {
    username: "sergi",
    token: "gnkrjbiu45nfkjsd",
    email: "sergi@isdi.com",
    isLogged: false,
  };

  const userLoggedIn: UserStructure = {
    username: "sergi",
    token: "gnkrjbiu45nfkjsd",
    email: "sergi@isdi.com",
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
