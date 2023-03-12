import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppStore, RootState } from "./store";
import { uiReducer } from "./store/features/ui/uiSlice";
import { userReducer } from "./store/features/user/userSlice";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      user: { isLogged: false, token: "" },
      ui: {
        isLoadingShowing: false,
        feedback: {
          message: "mockedMessage",
          isSuccess: true,
        },
      },
    },
    store = configureStore({
      reducer: { user: userReducer, ui: uiReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyles />
            {children}
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
