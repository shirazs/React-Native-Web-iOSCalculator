import { add, subtract, divide, multiply, MathType } from "mathjs";

export const operatorMap = {
  "÷": (leftOperand: number, rightOperand: number): MathType => {
    return divide(leftOperand, rightOperand);
  },
  "×": (leftOperand: number, rightOperand: number): MathType =>
    multiply(leftOperand, rightOperand),
  "−": (leftOperand: number, rightOperand: number): MathType =>
    subtract(leftOperand, rightOperand),
  "+": (leftOperand: number, rightOperand: number): MathType =>
    add(leftOperand, rightOperand)
};

export const getOperators = () => Object.keys(operatorMap);
