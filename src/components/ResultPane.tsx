import React from "react";
import { View, Text } from "react-native";
import { Styles } from "../styles/styles";
import { formatter } from "../utils/evaluation";

type Props = {
  displayValue: string;
  scale: number;
  testID: string;
};

export const ResultPane: React.FC<Props> = ({ displayValue, scale }) => {
  
  return (
    <View style={Styles.resultPane}>
      <Text
        numberOfLines={1}
        selectable={false}
        style={[
          Styles.resultText, {
            transform: [{ scale }]
          }]
        }
      >
        {formatter(displayValue)}
      </Text>
    </View>
  );
};
