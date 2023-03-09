import decodeToken from "jwt-decode";
import { useCallback } from "react";
import { loginUserActionCreator } from "../../store/feature/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { CustomTokenPayload } from "../useUser/types";
import { UseTokenStructure } from "./types";

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();
  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { username } = decodeToken<CustomTokenPayload>(token);

      dispatch(loginUserActionCreator({ username, token, isLogged: false }));
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return {
    getToken,
    removeToken,
  };
};

export default useToken;
