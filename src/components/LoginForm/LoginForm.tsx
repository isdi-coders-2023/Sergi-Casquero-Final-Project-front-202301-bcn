import Button from "../Button/Button";

const LoginForm = (): JSX.Element => {
  return (
    <>
      <h2>Welcome back!</h2>
      <label>
        <input placeholder="Email" autoFocus />
      </label>
      <label>
        <input placeholder="Password" />
      </label>
      <span>
        Not registered? <a href="register">Sign Up</a>
      </span>
      <Button className={""} text={"Login"} />
    </>
  );
};

export default LoginForm;
