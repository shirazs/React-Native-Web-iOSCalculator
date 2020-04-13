import { getOperators, operatorMap } from "./operatorMap";

describe("Operators", () => {
  test("returns array of operators", () => {
    expect(getOperators()).toEqual(["÷", "×", "−", "+"]);
  });

  test("addition operator", () => {
    expect(operatorMap["+"](2, 2)).toEqual(4);
  });

  test("multiplication operator", () => {
    expect(operatorMap["×"](2, 3)).toEqual(6);
  });

  test("minus operator", () => {
    expect(operatorMap["−"](2, 3)).toEqual(-1);
  });

  test("division operator", () => {
    expect(operatorMap["÷"](18, 2)).toEqual(9);
  });
});
