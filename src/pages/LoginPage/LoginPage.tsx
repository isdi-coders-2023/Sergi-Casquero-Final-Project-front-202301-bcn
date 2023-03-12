import LoginForm from "../../components/LoginForm/LoginForm";
import FormPageStyled from "../FormPageStyled/FormPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <FormPageStyled className="login-page">
      <h2 className="login-page__title">Welcome back!</h2>
      <LoginForm />
    </FormPageStyled>
  );
};

export default LoginPage;
