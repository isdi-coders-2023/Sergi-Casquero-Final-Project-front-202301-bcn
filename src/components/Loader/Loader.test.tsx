import renderWithProviders from "../../testUtils";
import { screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'RockFit' inside an h2 and a svg with a spinner", () => {
      const loaderTitle = "RockFit";

      renderWithProviders(<Loader />);
      const expectedTitle = screen.getByRole("heading", {
        name: loaderTitle,
        level: 2,
      });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
