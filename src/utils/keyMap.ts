import { OPERATORS } from "../constants";

export const keyMap = {
  isDigit: (input: string): boolean => /^[0-9]{1}$/.test(input),
  isNumber: (input: string): boolean => /^(\d*\.)?\d+$/gim.test(input),
  isOperator: (input: string): boolean => OPERATORS.includes(input),
  isEquals: (input: string): boolean => input === "=",
  isDecimal: (input: string): boolean => input === ".",
  isPercent: (input: string): boolean => input === "%",
  isPlusMinus: (input: string): boolean => input === "±"
};
