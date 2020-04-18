import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import App from "../App";
import Players from "../components/Players.js";
import Header from "../components/Header.js";

test("renders App without crashing", () => {
    render(<App />);
});

test("renders Players without crashing", () => {
    render(<Players />);
});

test("renders Header without crashing", () => {
    render(<Players />);
});

test("check player heading is rendering", () => {
    const { getByText } = render(<Players />);
    getByText(/world cup players/i);
});

test("check toggle button is showing", () => {
    const { getByTestId } = render(<Header />);
    getByTestId(/toggle/i);
});
