import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { loginUserActionCreator } from "../../store/feature/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import Wrapper from "../../mocks/Wrapper";

jest.mock("../../store/hooks");

describe("Given a useToken custom hook", () => {
  describe("When its getToken function is called", () => {
    test("Then it should call loginUserActionCreator with username decoded from token", () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJzZXJnaSIsImlhdCI6MTUxNjIzOTAyMn0.GrTRwzxBO9XZg4vCux7GJKi64zDJ1cEHZqXcWFJLmpw";
      const decodedToken = { username: "sergi" };
      localStorage.setItem("token", token);

      const dispatchMock = jest.fn();

      (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      getToken();

      expect(dispatchMock).toHaveBeenCalledWith(
        loginUserActionCreator({
          username: decodedToken.username,
          token,
          isLogged: false,
        })
      );

      localStorage.clear();
    });

    test("Then it should remove token from local storage", () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      removeToken();

      expect(localStorage.getItem("token")).toBeNull();
    });
  });
});
