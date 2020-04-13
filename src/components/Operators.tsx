import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { Styles } from "../styles/styles";
import { OPERATORS } from "../constants/index";
import { Action } from "../types";

interface Props {
  activeOperator: string | null;
  handlePress: (object: Action) => void;
}

export const Operators: React.FC<Props> = ({ activeOperator, handlePress }) => {
  return (
    <View style={Styles.groupTwo}>
      {OPERATORS.map(operator => (
        <TouchableHighlight
          key={operator}
          onPress={() => handlePress({ type: "OPERATOR", payload: operator })}
          style={[
            Styles.button,
            Styles.buttonOperand,
            activeOperator === operator ? Styles.active : null
          ]}
          underlayColor="#E17509"
        >
          <Text style={[Styles.buttonText, Styles.buttonTextOperand]}>
            {operator}
          </Text>
        </TouchableHighlight>
      ))}

      <TouchableHighlight
        onPress={() => handlePress({ type: "EVALUATE" })}
        style={[Styles.button, Styles.buttonOperand]}
        underlayColor="#B4B5B7"
      >
        <Text style={[Styles.buttonText, Styles.buttonTextOperand]}>=</Text>
      </TouchableHighlight>
    </View>
  );
};
