import { useCallback } from "react";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { UseTokenStructure } from "./types";

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();
  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(loginUserActionCreator(token));
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
