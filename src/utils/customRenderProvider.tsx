import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import mainTheme from "../Styles/mainTheme";
import GlobalStyle from "../Styles/GlobalStyle";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { activitiesReducer } from "../store/features/activities/activitiesSlice";
import { ActivityStructure } from "../store/features/activities/types";
import { store } from "../store";

const customRenderProvider = (
  children: React.ReactElement,
  mockData: ActivityStructure[],
) => {
  const mockStore = configureStore({
    reducer: { activitiesState: activitiesReducer },
    preloadedState: { activitiesState: { activities: mockData } },
  });
  return render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <Provider store={mockStore}>
          {children}
          <GlobalStyle />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>,
  );
};

export const customRenderWithoutBrowserRouter = (
  children: React.ReactElement,
) => {
  render(
    <ThemeProvider theme={mainTheme}>
      <Provider store={store}>{children}</Provider>
      <GlobalStyle />
    </ThemeProvider>,
  );
};

export default customRenderProvider;
