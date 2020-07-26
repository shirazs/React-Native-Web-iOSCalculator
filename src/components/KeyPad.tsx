import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { Operators } from "./Operators";
import { Styles } from "../styles/styles";
import { Action } from "../types";

const numbers = [[7, 8, 9], [4, 5, 6], [1, 2, 3]];

interface Props {
  activeOperator: string | null;
  memoryState: string;
  handlePress: (action: Action, e?: any) => void;
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
            <Text style={Styles.buttonText}>
              {memoryState}
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => handlePress({ type: "TOGGLE_SIGN" })}
            style={[Styles.button, Styles.buttonKey, Styles.buttonControl]}
            underlayColor="#B4B5B7"
          >
            <Text style={Styles.buttonText}>±</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => handlePress({ type: "PERCENT" })}
            style={[Styles.button, Styles.buttonKey, Styles.buttonControl]}
            underlayColor="#B4B5B7"
          >
            <Text style={Styles.buttonText}>%</Text>
          </TouchableHighlight>
        </View>

        { numbers.map((row, i) => {
          return (
            <View style={Styles.row} key={`row_${i}`}>
              <TouchableHighlight
                onPress={(event) => handlePress({ type: "DIGIT", payload: row[0] }, event)}
                style={[Styles.button, Styles.buttonKey]}
                underlayColor="#B4B5B7"
                testID={`key-${row[0]}`}
              >
                <Text  style={Styles.buttonText}>
                  {row[0]}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={(event) => handlePress({ type: "DIGIT", payload: row[1] }, event)}
                style={[Styles.button, Styles.buttonKey]}
                underlayColor="#B4B5B7"
                testID={`key-${row[1]}`}
              >
                <Text style={Styles.buttonText}>
                  {row[1]}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={(event) => handlePress({ type: "DIGIT", payload: row[2] }, event)}
                style={[Styles.button, Styles.buttonKey]}
                underlayColor="#B4B5B7"
                testID={`key-${row[2]}`} 
              >
                <Text style={Styles.buttonText}>
                  {row[2]}
                </Text>
              </TouchableHighlight>
            </View>
          );
        })}

        <View style={Styles.row}>
          <TouchableHighlight
            onPress={(event) => handlePress({ type: "DIGIT", payload: 0 }, event)}
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
