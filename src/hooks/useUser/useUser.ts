import { useNavigate } from "react-router-dom";
import {
  closeLoaderActionCreator,
  hideFeedbackActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/features/ui/uiSlice";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { UserCredentials, UserRegister } from "../../types/userTypes";
import { LoginResponse, UseUserStructure } from "./types";

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(showLoaderActionCreator());
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

      dispatch(closeLoaderActionCreator());

      navigate("/workouts");
    } catch {
      dispatch(closeLoaderActionCreator());

      dispatch(
        showFeedbackActionCreator({
          message: "Wrong credentials",
          isSuccess: false,
        })
      );
    }
  };

  const registerUser = async (registerData: UserRegister) => {
    try {
      dispatch(showLoaderActionCreator());
      const response = await fetch(`${apiUrl}/user/register`, {
        method: "POST",
        body: JSON.stringify(registerData),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      dispatch(closeLoaderActionCreator());
      navigate("/user/login");
    } catch (error) {
      dispatch(closeLoaderActionCreator());

      dispatch(
        showFeedbackActionCreator({
          message: "Oh! Something went wrong...",
          isSuccess: false,
        })
      );

      return;
    }
  };

  return { loginUser, registerUser };
};

export default useUser;
