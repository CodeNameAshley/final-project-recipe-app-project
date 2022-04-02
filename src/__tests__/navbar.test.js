import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("render login link", () => {
  render(<NavBar />);
  expect(screen.getByText(/login/)).toBeInTheDocument();
  expect(screen.getByText(/profile/)).toBeInTheDocument();
  expect(screen.getByText(/logout/)).toBeInTheDocument();
});
