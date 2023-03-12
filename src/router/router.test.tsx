import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { routes } from "./router";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import { store } from "../store";
import LoginPage from "../pages/LoginPage/LoginPage";

describe("Given a router", () => {
  describe("When in the '/user/login' path", () => {
    test("Then it should display the text 'Welcome back!' while rendering the LoginPage", () => {
      const headingText = "Welcome back!";

      const router = createMemoryRouter(routes, {
        initialEntries: ["/user/login"],
      });

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <LoginPage />
          </ThemeProvider>
        </Provider>
      );
      const expectedHeading = screen.getByText(headingText);

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
