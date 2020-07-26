import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Calculator } from "./Calculator";

const DIVIDE    = "÷";
const MULTIPLY  = "×";
const MINUS     = "−";
const ADD       = "+";

const PLUS_MINUS = "±";
const PERCENT = "%";

afterEach(cleanup);

test("should have default value of zero", () => {
  const { getByTestId } = render(<Calculator />);

  const display = getByTestId("display");
  expect(display.textContent).toBe("0");
});

test("should allow number input", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const display = getByTestId("display");

  fireEvent.click(getByText("1"));
  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("3"));

  expect(display.textContent).toBe("123");
});

test("should ignore multiple zero input", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const display = getByTestId("display");

  fireEvent.click(getByTestId("zero"));
  fireEvent.click(getByTestId("zero"));
  fireEvent.click(getByTestId("zero"));
  fireEvent.click(getByTestId("key-1"));

  expect(display.textContent).toBe("1");
});

test("should format number to a maximum of nine digits", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const display = getByTestId("display");

  fireEvent.click(getByText("1"));
  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("3"));
  fireEvent.click(getByText("4"));
  fireEvent.click(getByText("5"));
  fireEvent.click(getByText("6"));
  fireEvent.click(getByText("7"));
  fireEvent.click(getByText("8"));
  fireEvent.click(getByText("9"));
  fireEvent.click(getByText("9"));
  fireEvent.click(getByText("9"));

  expect(display.textContent).toBe('123,456,789');
});

test("should format the integer part in a fractional numbers", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const display = getByTestId("display");

  fireEvent.click(getByText("1"));
  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("3"));
  fireEvent.click(getByText("4"));
  fireEvent.click(getByText("."));
  fireEvent.click(getByText("5"));
  fireEvent.click(getByText("6"));
  fireEvent.click(getByText("7"));
  fireEvent.click(getByText("8"));
  fireEvent.click(getByText("9"));
  fireEvent.click(getByText("9"));
  fireEvent.click(getByText("9"));
  
  expect(display.textContent).toBe('1,234.56789');
});


test("should handle a sequence of expressions", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.click(getByText("2"));
  fireEvent.click(getByText(ADD));
  fireEvent.click(getByText("8")); // 10

  fireEvent.click(getByText(MINUS));
  fireEvent.click(getByText("9")); // 1
  
  fireEvent.click(getByText(DIVIDE));
  fireEvent.click(getByText("2")); // 0.5
  
  fireEvent.click(getByText(MULTIPLY));
  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("0"));
  
  fireEvent.click(getByText("=")); 

  expect(display.textContent).toBe("10");
});

test("should return a result from an expression after clicking equals", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.click(getByText("1"));
  fireEvent.click(getByText(ADD));
  fireEvent.click(getByText("2"));

  fireEvent.click(getByText("="));

  fireEvent.click(getByText("6"));

  expect(display.textContent).toBe("6");

  fireEvent.click(getByText(MULTIPLY));
  fireEvent.click(getByText("3"));

  fireEvent.click(getByText("="));

  expect(display.textContent).toBe("18");
});

// Decimal input
test("should handle decimal inputs", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.click(getByText("."));
  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("5"));

  fireEvent.click(getByText(ADD));
  fireEvent.click(getByText("."));
  fireEvent.click(getByText("7"));
  fireEvent.click(getByText("5"));

  fireEvent.click(getByText(DIVIDE));
  fireEvent.click(getByText("."));
  fireEvent.click(getByText("5"));

  fireEvent.click(getByText(MINUS));
  fireEvent.click(getByText("."));
  fireEvent.click(getByText("7"));
  fireEvent.click(getByText("5"));

  fireEvent.click(getByText("="));

  expect(display.textContent).toBe("1.25");
});

test("should handle decimal inputs", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.click(getByText("."));
  fireEvent.click(getByText("1"));

  fireEvent.click(getByText(ADD));
  fireEvent.click(getByText("."));
  fireEvent.click(getByText("2"));

  fireEvent.click(getByText("="));

  expect(display.textContent).toBe("0.3");
});

// Operators
test("should handle toggle sign operator", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.click(getByText(MINUS));
  fireEvent.click(getByText("1"));

  fireEvent.click(getByText("="));

  expect(display.textContent).toBe("-1");

  fireEvent.click(getByText(PLUS_MINUS));
  expect(display.textContent).toBe("1");
});

test("should handle percent operator", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.click(getByText("1"));
  fireEvent.click(getByTestId("zero"));
  fireEvent.click(getByTestId("zero"));

  fireEvent.click(getByText(PERCENT));
  fireEvent.click(getByText(PERCENT));
  fireEvent.click(getByText(PERCENT));
  fireEvent.click(getByText(PERCENT));
  fireEvent.click(getByText(PERCENT));

  expect(display.textContent).toBe("1e-8");
});
