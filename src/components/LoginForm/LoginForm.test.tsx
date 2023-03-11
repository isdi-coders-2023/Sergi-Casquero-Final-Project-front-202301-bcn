import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtils";
import { UserCredentials } from "../../types/userTypes";
import LoginForm from "./LoginForm";

const mockedLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockedLoginUser,
}));

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input with placeholder 'Email'", () => {
      const inputPlaceholder = "Email";

      renderWithProviders(<LoginForm />);
      const emailInput = screen.getByPlaceholderText(inputPlaceholder);

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it should show an input with placeholder 'Password'", () => {
      const inputPlaceholder = "Password";

      renderWithProviders(<LoginForm />);

      const passwordInput = screen.getByPlaceholderText(inputPlaceholder);

      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a button with text 'Login'", () => {
      const buttonText = "Login";

      renderWithProviders(<LoginForm />);

      const submitButton = screen.getByRole("button", { name: buttonText });

      expect(submitButton).toBeInTheDocument();
    });
  });

  describe("When the user types 'sergi@isdi.com' in the 'email' input", () => {
    test("Then it should show that text inside the input", async () => {
      const placeholderText = "Email";
      const textToType = "sergi@isdi.com";

      renderWithProviders(<LoginForm />);

      const emailInput: HTMLInputElement =
        screen.getByPlaceholderText(placeholderText);
      await userEvent.type(emailInput, textToType);

      expect(emailInput.value).toBe(textToType);
    });
  });

  describe("When the user submits the form", () => {
    test("Then it should call the handleSubmit function", async () => {
      const mockedUser: UserCredentials = {
        email: "sergi@isdi.com",
        password: "sergi123",
      };
      const submitButtonText = "Login";

      renderWithProviders(<LoginForm />);

      const submitButton = screen.getByRole("button", {
        name: submitButtonText,
      });
      const emailInput = screen.getByPlaceholderText("Email");
      const passswordInput = screen.getByPlaceholderText("Password");

      await act(async () => await userEvent.type(emailInput, mockedUser.email));
      await act(
        async () => await userEvent.type(passswordInput, mockedUser.password)
      );
      await act(async () => await userEvent.click(submitButton));

      await userEvent.click(submitButton);

      expect(mockedLoginUser).toHaveBeenCalledWith(mockedUser);
    });
  });
});
