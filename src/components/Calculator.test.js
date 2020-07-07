import React from "react";
import { render, fireEvent, cleanup } from "react-native-testing-library";
import { Calculator } from "./Calculator";

const DIVIDE = "÷";
const MULTIPLY = "×";
const MINUS = "−";
const ADD = "+";

const PLUS_MINUS = "±";
const PERCENT = "%";

afterEach(cleanup);

test("should have default value of zero", () => {
  const { getByTestId } = render(<Calculator />);

  const display = getByTestId("display");
  expect(display.props.displayValue).toBe("0");
});

test("should allow number input", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const display = getByTestId("display");

  fireEvent.press(getByText("1"));
  fireEvent.press(getByText("2"));
  fireEvent.press(getByText("3"));

  expect(display.props.displayValue).toBe("123");
});

test("should ignore multiple zero input", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const display = getByTestId("display");

  fireEvent.press(getByTestId("zero"));
  fireEvent.press(getByTestId("zero"));
  fireEvent.press(getByTestId("zero"));
  fireEvent.press(getByText("1"));

  expect(display.props.displayValue).toBe("1");
});

test("should have maximum input length of nine digits", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const display = getByTestId("display");

  fireEvent.press(getByText("1"));
  fireEvent.press(getByText("2"));
  fireEvent.press(getByText("3"));
  fireEvent.press(getByText("4"));
  fireEvent.press(getByText("5"));
  fireEvent.press(getByText("6"));
  fireEvent.press(getByText("7"));
  fireEvent.press(getByText("8"));
  fireEvent.press(getByText("9"));
  fireEvent.press(getByText("9"));
  fireEvent.press(getByText("9"));

  expect(display.props.displayValue.length).toBe(9);
});

test("should do basic addition", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const display = getByTestId("display");

  fireEvent.press(getByText("2"));
  fireEvent.press(getByText(ADD));
  fireEvent.press(getByText("8"));
  fireEvent.press(getByText("="));

  expect(display.props.displayValue).toBe("10");
});

test("should do basic subtraction", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.press(getByText("2"));
  fireEvent.press(getByText(MINUS));
  fireEvent.press(getByText("4"));
  fireEvent.press(getByText("="));

  expect(display.props.displayValue).toBe("-2");
});

test("should do basic multiplication", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.press(getByText("5"));
  fireEvent.press(getByText(MULTIPLY));
  fireEvent.press(getByText("3"));
  fireEvent.press(getByText("="));

  expect(display.props.displayValue).toBe("15");
});

test("should do basic division", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.press(getByText("1"));
  fireEvent.press(getByText(DIVIDE));
  fireEvent.press(getByText("2"));
  fireEvent.press(getByText("="));

  expect(display.props.displayValue).toBe("0.5");
});

test("should handle multiple operations", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.press(getByText("2"));
  fireEvent.press(getByText(ADD));
  fireEvent.press(getByText("8")); // 10
  fireEvent.press(getByText(MULTIPLY));

  fireEvent.press(getByText("5")); // 50

  fireEvent.press(getByText(DIVIDE));
  fireEvent.press(getByText("2")); // 25

  fireEvent.press(getByText(MINUS));
  fireEvent.press(getByText("7"));
  fireEvent.press(getByText("5"));
  fireEvent.press(getByText("=")); // 25 - 75

  expect(display.props.displayValue).toBe("-50");
});

test("should handle new expressions after evaluation", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.press(getByText("1"));
  fireEvent.press(getByText(ADD));
  fireEvent.press(getByText("2"));

  fireEvent.press(getByText("="));

  fireEvent.press(getByText("6"));

  expect(display.props.displayValue).toBe("6");

  fireEvent.press(getByText(MULTIPLY));
  fireEvent.press(getByText("3"));

  fireEvent.press(getByText("="));

  expect(display.props.displayValue).toBe("18");
});

// Decimal input
test("should handle decimal inputs", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.press(getByText("."));
  fireEvent.press(getByText("2"));
  fireEvent.press(getByText("5"));
  fireEvent.press(getByText(ADD));
  fireEvent.press(getByText("."));
  fireEvent.press(getByText("7"));
  fireEvent.press(getByText("5"));

  fireEvent.press(getByText("="));

  expect(display.props.displayValue).toBe("1");
});

// Operators
test("should handle toggle sign operator", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.press(getByText(MINUS));
  fireEvent.press(getByText("1"));

  fireEvent.press(getByText("="));

  expect(display.props.displayValue).toBe("-1");

  fireEvent.press(getByText(PLUS_MINUS));
  expect(display.props.displayValue).toBe("1");
});

test("should handle percent operator", () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId("display");

  fireEvent.press(getByText("1"));
  fireEvent.press(getByTestId("zero"));
  fireEvent.press(getByTestId("zero"));

  fireEvent.press(getByText(PERCENT));
  fireEvent.press(getByText(PERCENT));
  fireEvent.press(getByText(PERCENT));
  fireEvent.press(getByText(PERCENT));

  expect(display.props.displayValue).toBe("0.000001");
});
