import { act, renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { CustomTokenPayload } from "./types";
import useUser from "./useUser";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { UserCredentials } from "../../types/userTypes";
import { server } from "../../mocks/server";

beforeAll(() => {
  jest.clearAllMocks();
  server.listen();
});

afterAll(() => {
  server.close();
});

const mockDispatcher = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

jest.mock("jwt-decode", () => jest.fn());

const mockedTokenPayload: CustomTokenPayload = {
  id: "1",
  email: "sergi@isdi.com",
  username: "sergi27",
};

const userCredentials: UserCredentials = {
  email: "sergi@isdi.com",
  password: "sergi123",
};

describe("Given a useUser custom hook", () => {
  describe("When its loginUser function is called with the email 'sergi@isdi.com' and the password 'sergi123'", () => {
    test("Then it should dispatch the action to login the user", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockedTokenPayload
      );

      await act(async () => loginUser(userCredentials));

      expect(mockDispatcher).toHaveBeenCalledWith(
        loginUserActionCreator("mockedToken")
      );
    });
  });
});
