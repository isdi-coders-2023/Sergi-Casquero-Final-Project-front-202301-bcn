import { FormEvent, useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../store/hooks";
import { UserRegister } from "../../types/userTypes";
import Button from "../Button/Button";
import FormStyled from "../LoginForm/FormStyled";

const RegisterForm = (): JSX.Element => {
  const {
    feedback: { message },
  } = useAppSelector((state) => state.ui);

  const { registerUser } = useUser();

  const initialState: UserRegister = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await registerUser(formData);
    setFormData(initialState);
  };

  return (
    <FormStyled className="register-form" onSubmit={handleSubmit}>
      <input
        className="register-form__field"
        placeholder="Username"
        type={"text"}
        autoFocus
        name="username"
        onChange={handleChange}
        value={formData.username}
        required
      />
      <input
        className="register-form__field"
        placeholder="Email"
        type={"email"}
        autoFocus
        name="email"
        onChange={handleChange}
        value={formData.email}
        required
      />
      <input
        className="register-form__field"
        placeholder="Password"
        type={"password"}
        name="password"
        onChange={handleChange}
        value={formData.password}
        required
      />
      <span className="register-form__error">{message}</span>
      <span className="register-form__register">
        Already have an account?{" "}
        <a className="register-form__register-link" href="register">
          Log in
        </a>
      </span>
      <Button
        className={"register-form__submit"}
        text={"Sign Up"}
        type={"submit"}
      />
    </FormStyled>
  );
};

export default RegisterForm;
