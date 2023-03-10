import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { UserCredentials } from "../../types/userTypes";
import { CustomTokenPayload, LoginResponse, UseUserStructure } from "./types";

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const errorMessage = document.querySelector(".login-form__error")!;

  const loginUser = async (userCredentials: UserCredentials) => {
    errorMessage.classList.add("login-form__error--hidden");

    try {
      const response = await fetch(`${apiUrl}/user/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: {
          "Content-type": "application/json",
        },
      });

      const { token } = (await response.json()) as LoginResponse;
      const tokenPayload: CustomTokenPayload = decodeToken(token);
      const { username } = tokenPayload;

      dispatch(loginUserActionCreator({ token, username, isLogged: false }));
      localStorage.setItem("token", token);
    } catch {
      errorMessage.classList.remove("login-form__error--hidden");
    }
  };

  return { loginUser };
};

export default useUser;
