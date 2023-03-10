import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { AppStore, RootState } from "./store";
import { userReducer } from "./store/features/user/userSlice";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      user: { username: "", isLogged: false, token: "" },
      ui: {
        isLoadingShowing: false,
        feedback: {
          message: "",
          isSuccess: true,
        },
      },
    },
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
