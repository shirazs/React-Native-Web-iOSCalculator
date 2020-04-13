import { State, Action } from "../types";
import { formatter } from "../utils/evaluation";
import { operatorMap } from "../utils/operatorMap";
import { initialState } from "../constants";

export const reducer = (state: State, { type, payload }: Action): State => {
  let {
    displayValue,
    leftOperand,
    rightOperand,
    operatorInput,
    waitingForOperand
  } = state;

  switch (type) {
    case "DIGIT": {
      if (!waitingForOperand && formatter(displayValue).length === 11)
        return state;

      if (displayValue.indexOf(".") !== -1) {
        let value = Number(displayValue);
        rightOperand =
          rightOperand === value
            ? Number(`${displayValue}${payload}`)
            : rightOperand;
        leftOperand =
          leftOperand === value
            ? Number(`${displayValue}${payload}`)
            : leftOperand;
      } else if (leftOperand === 0 && operatorInput === null) {
        // console.log(1, displayValue, payload);
        leftOperand = Number(payload);
      } else if (operatorInput === null) {
        // console.log(2, displayValue, payload);
        leftOperand = leftOperand
          ? Number(`${displayValue}${payload}`)
          : Number(payload);
      } else if (rightOperand === null || rightOperand === 0) {
        // console.log(3, displayValue, payload);
        rightOperand = rightOperand
          ? Number(`${rightOperand}${payload}`)
          : Number(payload);
      } else {
        // console.log(4, displayValue, payload);
        rightOperand = Number(`${displayValue}${payload}`);
      }

      const result = rightOperand !== null ? rightOperand : leftOperand;
      return {
        ...state,
        displayValue: `${result}`,
        leftOperand,
        rightOperand,
        activeOperator: null,
        waitingForOperand: false,
        memoryState: "C"
      };
    }

    case "DECIMAL": {
      if (waitingForOperand) {
        return {
          ...state,
          displayValue: "0.",
          rightOperand: 0,
          activeOperator: null,
          waitingForOperand: false,
          memoryState: "C"
        };
      } else if (displayValue === "0") {
        return {
          ...state,
          displayValue: "0.",
          memoryState: "C"
        };
      } else if (displayValue.indexOf(".") === -1) {
        return {
          ...state,
          displayValue: `${displayValue}.`,
          memoryState: "C"
        };
      }

      return state;
    }

    case "OPERATOR":
      if (leftOperand !== null && rightOperand !== null) {
        const result =
          operatorInput &&
          operatorMap[operatorInput](leftOperand, rightOperand);
        return {
          ...state,
          displayValue: `${result}`,
          leftOperand: result,
          rightOperand: null,
          operatorInput: String(payload),
          activeOperator: String(payload),
          waitingForOperand: true
        };
      }

      return {
        ...state,
        operatorInput: String(payload),
        activeOperator: String(payload),
        waitingForOperand: true
      };

    case "PERCENT": {
      let value = Number(displayValue);
      let percentValue = value / 100;

      return {
        ...state,
        displayValue: `${percentValue}`,
        ...((rightOperand === value && { rightOperand: percentValue }) ||
          (leftOperand === value && { leftOperand: percentValue }))
      };
    }

    case "MEMORY_CLEAR": {
      if (leftOperand && rightOperand && operatorInput) {
        return {
          ...state,
          displayValue: "0",
          rightOperand: 0,
          activeOperator: operatorInput,
          waitingForOperand: true,
          memoryState: "AC"
        };
      } else {
        return {
          ...initialState
        };
      }
    }

    case "TOGGLE_SIGN": {
      let value = Number(displayValue);
      let toggleSignValue = value * -1;

      return {
        ...state,
        displayValue: `${toggleSignValue}`,
        ...((rightOperand === value && { rightOperand: toggleSignValue }) ||
          (leftOperand === value && { leftOperand: toggleSignValue }))
      };
    }

    case "EVALUATE": {
      rightOperand = rightOperand || leftOperand;
      const result =
        operatorInput && operatorMap[operatorInput](leftOperand, rightOperand);

      return {
        ...state,
        displayValue: `${result}`,
        leftOperand: 0,
        rightOperand: null,
        activeOperator: null,
        waitingForOperand: false
      };
    }

    default:
      return state;
  }
};
