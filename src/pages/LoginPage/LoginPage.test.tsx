import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage", () => {
  const emailPlaceholder = "Email";
  const passwordPlaceholder = "Password";

  const emailTextInput = "sergi@isdi.com";
  const passwordTextInput = "sergi123";

  describe("When rendered", () => {
    test("Then it should show an email field and a password field", () => {
      renderWithProviders(<LoginPage />);

      const userNameInput = screen.getByPlaceholderText(emailPlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

      expect(userNameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show the text 'Welcome back!' inside an h2 heading", () => {
      const headingText = "Welcome back!";

      renderWithProviders(<LoginPage />);

      const loginPageHeading = screen.getByRole("heading", {
        name: headingText,
        level: 2,
      });

      expect(loginPageHeading).toBeInTheDocument();
    });
  });

  describe("When the user types 'sergi@isdi.com' in the email field", () => {
    test("Then it should show 'sergi@isdi.com' in the email field", async () => {
      renderWithProviders(<LoginPage />);

      const emailInput = screen.getByPlaceholderText(emailPlaceholder);
      await userEvent.type(emailInput, emailTextInput);

      expect(emailInput).toHaveValue(emailTextInput);
    });
  });

  describe("When the user types 'sergi123' in the password field", () => {
    test("Then it should show 'sergi123' in the password field", async () => {
      renderWithProviders(<LoginPage />);

      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
      await userEvent.type(passwordInput, passwordTextInput);

      expect(passwordInput).toHaveValue(passwordTextInput);
    });
  });
});
