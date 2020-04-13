import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { Operators } from "./Operators";
import { Styles } from "../styles/styles";
import { Action } from "../types";

const numbers = [[7, 8, 9], [4, 5, 6], [1, 2, 3]];

interface Props {
  activeOperator: string | null;
  memoryState: string;
  handlePress: (action: Action) => void;
}

export const KeyPad: React.FC<Props> = ({
  activeOperator,
  memoryState,
  handlePress
}) => {
  return (
    <View style={Styles.containerKeypad}>
      <View style={Styles.groupOne}>
        <View style={Styles.row}>
          <TouchableHighlight
            onPress={() => handlePress({ type: "MEMORY_CLEAR" })}
            style={[Styles.button, Styles.buttonKey, Styles.buttonControl]}
            underlayColor="#B4B5B7"
          >
            <Text style={[Styles.buttonText, Styles.buttonControlText]}>
              {memoryState}
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => handlePress({ type: "TOGGLE_SIGN" })}
            style={[Styles.button, Styles.buttonKey, Styles.buttonControl]}
            underlayColor="#B4B5B7"
          >
            <Text style={[Styles.buttonText, Styles.buttonControlText]}>±</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => handlePress({ type: "PERCENT" })}
            style={[Styles.button, Styles.buttonKey, Styles.buttonControl]}
            underlayColor="#B4B5B7"
          >
            <Text style={[Styles.buttonText, Styles.buttonControlText]}>%</Text>
          </TouchableHighlight>
        </View>

        {numbers.map((row, i) => {
          return (
            <View style={Styles.row} key={`row_${i}`}>
              <TouchableHighlight
                onPress={() => handlePress({ type: "DIGIT", payload: row[0] })}
                style={[Styles.button, Styles.buttonKey]}
                underlayColor="#B4B5B7"
              >
                <Text data-testid={`key-${row[0]}`} style={Styles.buttonText}>
                  {row[0]}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => handlePress({ type: "DIGIT", payload: row[1] })}
                style={[Styles.button, Styles.buttonKey]}
                underlayColor="#B4B5B7"
              >
                <Text data-testid={`key-${row[1]}`} style={Styles.buttonText}>
                  {row[1]}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => handlePress({ type: "DIGIT", payload: row[2] })}
                style={[Styles.button, Styles.buttonKey]}
                underlayColor="#B4B5B7"
              >
                <Text style={Styles.buttonText}>{row[2]}</Text>
              </TouchableHighlight>
            </View>
          );
        })}

        <View style={Styles.row}>
          <TouchableHighlight
            onPress={() => handlePress({ type: "DIGIT", payload: 0 })}
            style={[Styles.button, Styles.double]}
            underlayColor="#B4B5B7"
          >
            <Text testID="zero" style={[Styles.buttonText, Styles.alignLeft]}>
              0
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => handlePress({ type: "DECIMAL" })}
            style={[Styles.button, Styles.dot]}
            underlayColor="#B4B5B7"
          >
            <Text style={[Styles.buttonText, Styles.bold]}>.</Text>
          </TouchableHighlight>
        </View>
      </View>

      <Operators activeOperator={activeOperator} handlePress={handlePress} />
    </View>
  );
};
