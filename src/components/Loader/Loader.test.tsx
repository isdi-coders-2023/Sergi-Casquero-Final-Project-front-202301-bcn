import renderWithProviders from "../../testUtils";
import { screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When rendered", () => {
    test("Then it should show a spinner", () => {
      const ariaLabelText = "loader";

      renderWithProviders(<Loader />);
      const expectedSpinner = screen.getByLabelText(ariaLabelText);

      expect(expectedSpinner).toBeInTheDocument();
    });
  });
});
