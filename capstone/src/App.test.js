import {
  fireEvent,
  render,
  screen,
  act,
  describe,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Renders the Header heading", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByText("Reserve a table");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Time");
  expect(headingElementNew).toBeInTheDocument();
});

test("Navigate to reservation", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
  const reserveButton = screen.getByTestId("Reservation-button");

  await act(async () => {
    await userEvent.click(reserveButton);
  });
  expect(screen.getByText("Make Your Reservation")).toBeInTheDocument();
});
