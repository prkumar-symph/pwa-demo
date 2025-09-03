// src/App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello World", () => {
  render(<App />);
  expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
});
