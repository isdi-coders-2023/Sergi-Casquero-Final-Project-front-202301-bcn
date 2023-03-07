import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input with placeholder 'Email'", () => {
      const inputPlaceholder = "Email";

      render(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );
      const emailInput = screen.getByPlaceholderText(inputPlaceholder);

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show an input with placeholder 'Password'", () => {
      const inputPlaceholder = "Password";

      render(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const passwordInput = screen.getByPlaceholderText(inputPlaceholder);

      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a button with text 'Login'", () => {
      const buttonText = "Login";

      render(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const submitButton = screen.getByRole("button", { name: buttonText });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
