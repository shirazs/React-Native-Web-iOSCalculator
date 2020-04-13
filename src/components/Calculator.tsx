import React, { useReducer } from "react";
import { View } from "react-native";
import { ResultPane } from "./ResultPane";
import { KeyPad } from "./KeyPad";
import { reducer } from "../reducers/";
import { State, Action } from "../types/";
import { initialState } from "../constants";
import { Styles } from "../styles/styles";

export const Calculator: React.FC = () => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );

  const handlePress = (action: Action) => {
    dispatch(action);
  };

  return (
    <View style={Styles.container}>
      <ResultPane displayValue={state.displayValue} testID="display" />
      <KeyPad
        handlePress={handlePress}
        memoryState={state.memoryState}
        activeOperator={state.activeOperator}
      />
    </View>
  );
};
