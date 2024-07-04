// src/test-utils.js
import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Adjust the import path as necessary

function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from "@testing-library/react";
export { renderWithProviders };
