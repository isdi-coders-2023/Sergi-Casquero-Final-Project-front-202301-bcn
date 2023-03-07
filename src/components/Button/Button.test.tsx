import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered with the text 'Login'", () => {
    test("Then it should show a button with the text 'Login' inside", () => {
      const buttonText = "Login";

      render(
        <ThemeProvider theme={theme}>
          <Button className={""} text={buttonText} />
        </ThemeProvider>
      );
      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
