import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils";
import RegisterPage from "./RegisterPage";

describe("Given a LoginPage", () => {
  const usernamePlaceholder = "Username";
  const emailPlaceholder = "Email";
  const passwordPlaceholder = "Password";

  describe("When rendered", () => {
    test("Then it should show an email field and a password field", () => {
      renderWithProviders(<RegisterPage />);

      const usernameInput = screen.getByPlaceholderText(usernamePlaceholder);
      const emailInput = screen.getByPlaceholderText(emailPlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

      expect(usernameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show the text 'Welcome back!' inside an h2 heading", () => {
      const headingText = "Hello rookie!";

      renderWithProviders(<RegisterPage />);

      const loginPageHeading = screen.getByRole("heading", {
        name: headingText,
        level: 2,
      });

      expect(loginPageHeading).toBeInTheDocument();
    });
  });
});
