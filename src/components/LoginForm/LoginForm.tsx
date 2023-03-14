import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../store/hooks";
import { UserCredentials } from "../../types/userTypes";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const LoginForm = (): JSX.Element => {
  const {
    feedback: { message },
  } = useAppSelector((state) => state.ui);

  const { loginUser } = useUser();

  const initialLoginState: UserCredentials = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialLoginState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await loginUser(formData);
    setFormData(initialLoginState);
  };

  return (
    <FormStyled className="login-form" onSubmit={handleSubmit}>
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
      <span className="login-form__error">{message}</span>
      <span className="login-form__register">
        Not registered?{" "}
        <Link className="login-form__register-link" to={"/user/register"}>
          Sign Up
        </Link>
      </span>
      <Button className={"login-form__submit"} text={"Login"} type={"submit"} />
    </FormStyled>
  );
};

export default LoginForm;
