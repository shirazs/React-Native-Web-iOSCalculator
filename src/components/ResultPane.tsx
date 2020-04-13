import React from "react";
import { View, Text } from "react-native";
import { Styles } from "../styles/styles";
import { formatter, scaleTextSize } from "../utils/evaluation";

type Props = {
  displayValue: string;
  testID: string;
};

export const ResultPane: React.FC<Props> = ({ displayValue }) => {
  const formattedValue = formatter(displayValue);

  return (
    <View style={Styles.resultPane}>
      <Text
        numberOfLines={1}
        selectable={false}
        style={[Styles.resultText, { ...scaleTextSize(formattedValue) }]}
      >
        {formattedValue}
      </Text>
    </View>
  );
};
