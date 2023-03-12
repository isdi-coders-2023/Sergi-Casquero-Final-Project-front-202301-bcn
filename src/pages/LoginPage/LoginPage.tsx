import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <LoginPageStyled className="login-page">
      <h2 className="login-page__title">Welcome back!</h2>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
