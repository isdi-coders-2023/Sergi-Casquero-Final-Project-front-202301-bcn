import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtils";
import RegisterForm from "./RegisterForm";

const mockUserRegister = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockUserRegister,
}));

afterEach(() => {
  jest.resetAllMocks();
});

describe("Given the RegisterForm component", () => {
  const usernamePlaceholder = "Username";
  const emailPlaceholder = "Email";
  const passwordPlaceholder = "Password";
  const usernameExampleInput = "sergi";
  const emailExampleInput = "sergi27@isdi.com";
  const passwordExampleInput = "53r61";

  describe("When rendered", () => {
    test("Then it should show username, email, and password fields", () => {
      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.getByPlaceholderText(usernamePlaceholder);
      const userEmailInput = screen.getByPlaceholderText(emailPlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

      expect(usernameInput).toBeInTheDocument();
      expect(userEmailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    describe("And user type 'sergi27' in the username field", () => {
      test("Then it should show 'sergi27' in that field", async () => {
        renderWithProviders(<RegisterForm />);

        const nameInput = screen.getByPlaceholderText(usernamePlaceholder);
        await userEvent.type(nameInput, usernameExampleInput);

        expect(nameInput).toHaveValue(usernameExampleInput);
      });
    });

    describe("And the user types 'sergi27@isdi.com' in the email field", () => {
      test("Then should show 'sergi27@isdi.com' in email field", async () => {
        const emailTextInput = "sergi27@isdi.com";

        renderWithProviders(<RegisterForm />);

        const emailInput = screen.getByPlaceholderText(emailPlaceholder);
        await userEvent.type(emailInput, emailTextInput);

        expect(emailInput).toHaveValue(emailTextInput);
      });
    });

    describe("And user types '12345' in the password field", () => {
      test("Then it should show '12345' in that field", async () => {
        const passwordTextInput = "12345";

        renderWithProviders(<RegisterForm />);

        const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
        await userEvent.type(passwordInput, passwordTextInput);

        expect(passwordInput).toHaveValue(passwordTextInput);
      });
    });

    describe("When the user types correctly in each field and submits the form", () => {
      test("Then it should call registerUser function", async () => {
        renderWithProviders(<RegisterForm />);

        const button = screen.getByRole("button", { name: "Sign Up" });
        const nameInput = screen.getByPlaceholderText(usernamePlaceholder);
        const emailInput = screen.getByPlaceholderText(emailPlaceholder);
        const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

        await userEvent.type(nameInput, usernameExampleInput);
        await userEvent.type(emailInput, emailExampleInput);
        await userEvent.type(passwordInput, passwordExampleInput);
        await userEvent.click(button);

        expect(mockUserRegister).toHaveBeenCalled();
      });
    });
  });
});
