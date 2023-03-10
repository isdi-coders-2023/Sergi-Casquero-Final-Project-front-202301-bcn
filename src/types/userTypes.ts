export interface UserStructure {
  token: string;
}
export interface UserState extends UserStructure {
  isLogged: boolean;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserRegister extends UserCredentials {
  username: string;
}
