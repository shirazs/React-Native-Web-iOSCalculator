import { keyMap } from "./keyMap";

describe("Check key press type for numbers", () => {
  test("returns true for a single digit", () => {
    expect(keyMap.isDigit("1")).toEqual(true);
  });

  test("returns false for multiple digits", () => {
    expect(keyMap.isDigit("123")).toEqual(false);
  });
  
  test("returns false for non digits", () => {
    expect(keyMap.isDigit("+")).toEqual(false);
    expect(keyMap.isDigit("-")).toEqual(false);
  });
});

describe("Check key press type for operator", () => {
  test("returns true for a valid symbol", () => {
    expect(keyMap.isOperator("+")).toEqual(true);
  });

  test("returns false for an invalid symbol", () => {
    expect(keyMap.isOperator('/')).toEqual(false);
    expect(keyMap.isOperator('=')).toEqual(false);
  });
});

describe("Check key press type for equals", () => {
  test("returns true for a valid symbol", () => {
    expect(keyMap.isEquals("=")).toEqual(true);
  });
});

describe("Check key press type for decimal", () => {
  test("returns true for a valid symbol", () => {
    expect(keyMap.isDecimal(".")).toEqual(true);
  });
});

describe("Check key press type for plus minus", () => {
  test("returns true for a valid symbol", () => {
    expect(keyMap.isPlusMinus("±")).toEqual(true);
  });
});

describe("Check key press type for percent", () => {
  test("returns true for a valid symbol", () => {
    expect(keyMap.isPercent("%")).toEqual(true);
  });
});
