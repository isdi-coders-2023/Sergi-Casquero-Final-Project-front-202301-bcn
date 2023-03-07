import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled className="login-form">
      <h2 className="login-form__title">Welcome back!</h2>
      <label>
        <input
          className="login-form__email"
          placeholder="Email"
          type={"email"}
          autoFocus
        />
      </label>
      <label>
        <input
          className="login-form__password"
          placeholder="Password"
          type={"password"}
        />
      </label>
      <span className="login-form__register">
        Not registered?{" "}
        <a className="login-form__register-link" href="register">
          Sign Up
        </a>
      </span>
      <Button className={"login-form__submit"} text={"Login"} />
    </LoginFormStyled>
  );
};

export default LoginForm;
