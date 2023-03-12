import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { routes } from "./router";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import { store } from "../store";

describe("Given a router", () => {
  describe("When in the '/' path", () => {
    test("dsds", () => {
      const headingText = "Welcome back!";

      const router = createMemoryRouter(routes, {
        initialEntries: ["/user/login"],
      });

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </Provider>
      );
      const expectedHeading = screen.getByText(headingText);

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
