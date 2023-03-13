import renderWithProviders from "../../testUtils";
import { screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'RockFit' inside an h1 heading", () => {
      const expectedHeader = "RockFit";

      renderWithProviders(<Layout />);
      const header = screen.getByText(expectedHeader);

      expect(header).toBeInTheDocument();
    });
  });
});
