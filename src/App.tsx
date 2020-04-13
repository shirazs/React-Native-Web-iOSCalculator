import React from "react";
import {StatusBar} from "react-native";
import {Calculator} from "./components/Calculator";

StatusBar.setBarStyle("light-content", true);

export const App: React.FC = () => <Calculator />;
