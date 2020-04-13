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
  readonly type: "DIGIT";
  readonly payload: number;
};

type Operator = {
  readonly type: "OPERATOR";
  readonly payload: string;
};

type Sign = {
  readonly type: "TOGGLE_SIGN";
  payload?: string;
};

type Percent = {
  readonly type: "PERCENT";
  payload?: string;
};

type Decimal = {
  readonly type: "DECIMAL";
  payload?: string;
};

type MemoryClear = {
  readonly type: "MEMORY_CLEAR";
  payload?: string;
};

type Evaluate = {
  readonly type: "EVALUATE";
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
