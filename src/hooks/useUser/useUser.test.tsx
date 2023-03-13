import { act, renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { CustomTokenPayload } from "./types";
import useUser from "./useUser";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { UserCredentials, UserRegister } from "../../types/userTypes";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import {
  closeLoaderActionCreator,
  showFeedbackActionCreator,
} from "../../store/features/ui/uiSlice";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  jest.clearAllMocks();
  server.resetHandlers();
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

const userRegisterData: UserRegister = {
  username: "sergi27",
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

    describe("When the user submits the form with wrong credentials", () => {
      test("Then it should dispatch the action to show feedback", async () => {
        server.resetHandlers(...errorHandlers);

        const {
          result: {
            current: { loginUser },
          },
        } = renderHook(() => useUser(), {
          wrapper: Wrapper,
        });

        (
          decodeToken as jest.MockedFunction<typeof decodeToken>
        ).mockReturnValue(mockedTokenPayload);

        await act(async () => loginUser(userCredentials));

        expect(mockDispatcher).toHaveBeenCalledWith(
          showFeedbackActionCreator({
            message: "Wrong credentials",
            isSuccess: false,
          })
        );
      });
    });
  });

  describe("When its registerUser function is called with username 'sergi27', email 'sergi@isdi.com', and password 'sergi123'", () => {
    test("Then it should dispatch the action to register the user", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      await act(async () => registerUser(userRegisterData));

      expect(mockDispatcher).toHaveBeenCalledWith(closeLoaderActionCreator());
    });
  });

  describe("When its registerUser function is called and the response is not ok", () => {
    test("Then it should dispatch the function to show the message 'Oh! Something went wrong...'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      await act(async () => registerUser(userRegisterData));

      expect(mockDispatcher).toHaveBeenCalledWith(
        showFeedbackActionCreator({
          message: "Oh! Something went wrong...",
          isSuccess: false,
        })
      );
    });
  });
});
