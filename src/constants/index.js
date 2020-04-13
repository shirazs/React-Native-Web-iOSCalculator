import { getOperators } from "../utils/operatorMap";

export const OPERATORS = [...getOperators()];
export const DISPLAY_FONT_SIZE = 72;

export const initialState = {
  displayValue: "0",
  leftOperand: 0,
  rightOperand: null,
  operatorInput: null,
  activeOperator: null,
  waitingForOperand: false,
  memoryState: "AC"
};
