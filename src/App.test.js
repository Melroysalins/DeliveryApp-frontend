// src/App.test.js
import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import App from "./App"; // Adjust the import path as necessary

test("renders learn react link", () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
