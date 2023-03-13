import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When rendered", () => {
    test("Then it should show the message 'Oops... Page not found'", () => {
      const notFoundMessage = "Oops... Page not found!";

      renderWithProviders(<NotFoundPage />);
      const message = screen.getByText(notFoundMessage);

      expect(message).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Go back' inside", () => {
      const buttonMessage = "Go back";

      renderWithProviders(<NotFoundPage />);
      const button = screen.getByRole("button", { name: buttonMessage });

      expect(button).toBeInTheDocument();
    });
  });
});
