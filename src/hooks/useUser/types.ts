import { UserCredentials, UserRegister } from "../../types/userTypes";
import { type JwtPayload } from "jwt-decode";

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  email: string;
  username: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  registerUser: (registerData: UserRegister) => Promise<void>;
}
