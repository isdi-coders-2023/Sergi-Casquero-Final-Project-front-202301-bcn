import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils";
import HomePage from "./HomePage";

describe("Given a HomePage page", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'RockFit' as a header inside an h1", () => {
      const headingText = "HomePage";

      renderWithProviders(<HomePage />);
      const header = screen.getByText(headingText);

      expect(header).toBeInTheDocument();
    });
  });
});
