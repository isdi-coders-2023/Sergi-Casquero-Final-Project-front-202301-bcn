import RegisterForm from "../../components/RegisterForm/RegisterForm";
import FormPageStyled from "../FormPageStyled/FormPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <FormPageStyled className="login-page">
      <h2 className="register-page__title">Hello rookie!</h2>
      <RegisterForm />
    </FormPageStyled>
  );
};

export default RegisterPage;
