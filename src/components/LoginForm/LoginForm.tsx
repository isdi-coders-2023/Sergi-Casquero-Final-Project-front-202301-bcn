import { SyntheticEvent, useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../types/userTypes";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const initialLoginState: UserCredentials = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialLoginState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await loginUser(formData);
    setFormData(initialLoginState);
  };

  return (
    <LoginFormStyled className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form__title">Welcome back!</h2>
      <input
        className="login-form__field"
        placeholder="Email"
        type={"email"}
        autoFocus
        name="email"
        onChange={handleChange}
        value={formData.email}
        required
      />
      <input
        className="login-form__field"
        placeholder="Password"
        type={"password"}
        name="password"
        onChange={handleChange}
        value={formData.password}
        required
      />
      <span className="login-form__register">
        Not registered?{" "}
        <a className="login-form__register-link" href="register">
          Sign Up
        </a>
      </span>
      <Button className={"login-form__submit"} text={"Login"} type={"submit"} />
    </LoginFormStyled>
  );
};

export default LoginForm;
