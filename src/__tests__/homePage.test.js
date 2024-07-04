import { render, screen } from "@testing-library/react";
import HomePage from "../pages/homePage";
import "@testing-library/jest-dom";

test("should load homepage component", () => {
  render(<HomePage />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
