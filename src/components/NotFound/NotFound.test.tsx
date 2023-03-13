import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils";
import NotFound from "./NotFound";

describe("Given a NotFound component", () => {
  describe("When rendered", () => {
    test("Then it should show the message 'Oops... Page not found'", () => {
      const notFoundMessage = "Oops... Page not found!";

      renderWithProviders(<NotFound />);
      const message = screen.getByText(notFoundMessage);

      expect(message).toBeInTheDocument();
    });
  });
});
