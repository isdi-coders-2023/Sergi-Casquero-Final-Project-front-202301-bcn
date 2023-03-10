import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { UserCredentials } from "../../types/userTypes";
import { LoginResponse, UseUserStructure } from "./types";

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${apiUrl}/user/login`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-type": "application/json",
      },
    });

    const { token } = (await response.json()) as LoginResponse;

    dispatch(loginUserActionCreator(token));
    localStorage.setItem("token", token);
  };

  return { loginUser };
};

export default useUser;
