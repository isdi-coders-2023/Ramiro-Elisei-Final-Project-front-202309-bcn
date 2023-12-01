import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import mainTheme from "../Styles/mainTheme";
import GlobalStyle from "../Styles/GlobalStyle";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { activitiesReducer } from "../store/features/activities/activitiesSlice";
import activitiesMockData from "../mocks/activitiesMock";

const customRenderProvider = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { activitiesState: activitiesReducer },
    preloadedState: { activitiesState: { activities: activitiesMockData } },
  });
  return render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      <Provider store={mockStore}>
        <GlobalStyle />
      </Provider>
    </BrowserRouter>,
  );
};
export default customRenderProvider;
