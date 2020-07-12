import { StyleSheet, PixelRatio } from "react-native";
import { DISPLAY_FONT_SIZE } from "../constants/";
import { isMobileOnly } from "react-device-detect";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: isMobileOnly ? "100vw" : 325,
    height: isMobileOnly ? "90vh" : 475,
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
    alignSelf: "center",
    backgroundColor: "#1C1C1C",
    ...(!isMobileOnly
      ? {
          shadowColor: "#000",
          shadowOffset: { width: 5, height: 15 },
          shadowOpacity: 0.45,
          shadowRadius: 15
        }
      : {})
  },
  resultPane: {
    flex: 0.27,
    marginTop: 30
  },
  resultText: {
    display: "flex",
    flex: 1,
    fontFamily: "System",
    fontWeight: "100",
    fontSize: DISPLAY_FONT_SIZE,
    borderColor: "red",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    color: 'white',
    textAlign: "right",
    height: 78,
    position: "absolute",
    right: 13,
    bottom: 7,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },

  /* Container for keypad */
  containerKeypad: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 0.73
  },

  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    flex: 0.75,
    alignSelf: "stretch",
    justifyContent: "flex-start"
  },

  groupOne: {
    flex: 0.75,
    flexDirection: "column",
    backgroundColor: "teal",
    alignSelf: "stretch",
    justifyContent: "space-between"
  },

  groupTwo: {
    flex: 0.25,
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-between"
  },

  button: {
    backgroundColor: "#D4D4D2",
    borderColor: "grey",
    borderLeftWidth: 0,
    borderTopWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get(),
    alignItems: "center",
    justifyContent: "center"
  },

  buttonKey: {
    flex: 0.33333,
    alignSelf: "stretch"
  },

  buttonText: {
    fontSize: 28,
    color: "black",
    fontFamily: "System",
    fontWeight: "100"
  },

  buttonOperand: {
    alignSelf: "stretch",
    flex: 0.25,
    backgroundColor: "#FF9500"
  },

  buttonTextOperand: {
    fontSize: 38,
    color: "white"
  },

  buttonControl: {
    backgroundColor: "#C6C8CA"
  },

  buttonControlText: {
    fontSize: 24
  },

  double: {
    flex: 0.66777,
    alignSelf: "stretch",
    alignItems: "center"
  },

  dot: {
    flex: 0.3333,
    alignSelf: "stretch",
    alignItems: "center"
  },

  active: {
    borderColor: "#1A0F00",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },

  //Misc
  linearGradient: {
    flex: 1
  },

  bold: {
    fontWeight: "normal"
  },

  alignLeft: {
    alignSelf: "flex-start",
    paddingLeft: "19%"
  }
});
