export type State = {
  displayValue: string;
  leftOperand: number;
  rightOperand: number | null;
  operatorInput: string | null;
  activeOperator: string | null;
  waitingForOperand: boolean;
  memoryState: string;
};

type Number = {
  type: "DIGIT";
  payload: number;
};

type Operator = {
  type: "OPERATOR";
  payload: string;
};

type Sign = {
  type: "TOGGLE_SIGN";
  payload?: string;
};

type Percent = {
  type: "PERCENT";
  payload?: string;
};

type Decimal = {
  type: "DECIMAL";
  payload?: string;
};

type MemoryClear = {
  type: "MEMORY_CLEAR";
  payload?: string;
};

type Evaluate = {
  type: "EVALUATE";
  payload?: string;
};

export type Action =
  | Number
  | Operator
  | Sign
  | Percent
  | Decimal
  | Evaluate
  | MemoryClear;
