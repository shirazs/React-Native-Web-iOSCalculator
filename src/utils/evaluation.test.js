import { toNumber, formatter } from "./evaluation";

describe("Format number value to formatted string", () => {
  test("returns number with formatting", () => {
    expect(formatter("999999999")).toEqual("999,999,999");
    expect(formatter("1234.00001")).toEqual("1,234.00001");
    expect(formatter("999111.00001")).toEqual("999,111.00001");
  });

  // test("returns exponential values for big decimal numbers", () => {
  //   expect(formatter((0.00000001 / 100).toString())).toEqual("1e-10");
  //   expect(formatter((9.99999999 / 100).toString())).toEqual("1e-1");
  // });

  test("returns exponential values for big numbers", () => {
    expect(formatter((999999999 + 1).toString())).toEqual("1e9");
    expect(formatter((-999999999 - 1).toString())).toEqual("-1e9");
  });
});

describe("Convert string value to number", () => {
  test("returns number", () => {
    expect(toNumber("100,001")).toEqual(100001);
  });
  test("handles decimal values", () => {
    expect(toNumber("10,999.99")).toEqual(10999.99);
  });
});
