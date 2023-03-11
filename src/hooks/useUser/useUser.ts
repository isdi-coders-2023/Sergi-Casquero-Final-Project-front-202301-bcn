import {
  hideFeedbackActionCreator,
  showFeedbackActionCreator,
} from "../../store/features/ui/uiSlice";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { UserCredentials } from "../../types/userTypes";
import { LoginResponse, UseUserStructure } from "./types";

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(hideFeedbackActionCreator({ message: "", isSuccess: false }));
      const response = await fetch(`${apiUrl}/user/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      const { token }: LoginResponse = await response.json();

      dispatch(loginUserActionCreator(token));
      localStorage.setItem("token", token);
    } catch {
      dispatch(
        showFeedbackActionCreator({
          message: "Wrong credentials",
          isSuccess: false,
        })
      );
    }
  };

  return { loginUser };
};

export default useUser;
