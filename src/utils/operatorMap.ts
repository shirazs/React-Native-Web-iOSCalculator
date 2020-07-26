import { Decimal } from 'decimal.js';

export const operatorMap = {
  "÷": (leftOperand: number, rightOperand: number) => 
    Decimal.div(leftOperand, rightOperand).toNumber(),
  "×": (leftOperand: number, rightOperand: number) =>
    Decimal.mul(leftOperand, rightOperand).toNumber(),
  "−": (leftOperand: number, rightOperand: number) =>
    Decimal.sub(leftOperand, rightOperand).toNumber(),
  "+": (leftOperand: number, rightOperand: number) =>
    Decimal.add(leftOperand, rightOperand).toNumber()
};

export const getOperators = () => Object.keys(operatorMap);
