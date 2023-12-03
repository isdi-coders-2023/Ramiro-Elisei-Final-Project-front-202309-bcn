import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import mainTheme from "../Styles/mainTheme";
import GlobalStyle from "../Styles/GlobalStyle";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { activitiesReducer } from "../store/features/activities/activitiesSlice";
import activitiesMockData from "../mocks/activitiesMock";
import { PropsWithChildren } from "react";
import { ActivityStructure } from "../store/features/activities/types";

const mockStore = configureStore({
  reducer: {
    activities: activitiesReducer,
  },
  preloadedState: {
    activities: { activities: activitiesMockData },
  },
});

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

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default customRenderProvider;
