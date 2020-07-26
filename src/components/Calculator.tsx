import React, { useReducer, useState } from "react";
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

  const [textScale, setScale] = useState(1);

  const handlePress = (action: Action, e?: React.SyntheticEvent) => {
    dispatch(action);
    
    if (e && e.target) {
      const container = (e.target as HTMLDivElement).closest('#app');
      
      const resultPaneDimensions = container?.firstElementChild?.getBoundingClientRect();
      
      const textNodeDimensions = container?.firstElementChild?.firstElementChild?.getBoundingClientRect();

      if (resultPaneDimensions && textNodeDimensions) {
        const track = Math.ceil(textNodeDimensions.left - resultPaneDimensions.left);
        let threshold = 100;
        
        if (track <= threshold) {
          setScale(0.75);
        } else {
          setScale(1); // Reset scale
        }
      }
    }
  };

  return (
    <View style={Styles.container} nativeID='app'>
      <ResultPane 
        displayValue={state.displayValue} 
        scale={textScale}
      />
      <KeyPad
        handlePress={handlePress}
        memoryState={state.memoryState}
        activeOperator={state.activeOperator}
      />
    </View>
  );
};
