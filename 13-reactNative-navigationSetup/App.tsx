import * as React from "react";
import { View, Text } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import StaticStackNavigator from "./src/navigator/stack/StaticStackNavigator";
import DynamicStackNavigator from "./src/navigator/stack/DynamicStackNavigator";
import DynamicTabNavigator from "./src/navigator/tabs/DynamicTabNavigator";
import DynamicTabNavigator2 from "./src/navigator/tabs/DynamicTabNavigator2";
import DynamicTabNavigator3 from "./src/navigator/tabs/DynamicTabNavigator3";

export default function App() {
  return (
    <DynamicTabNavigator3 />
  );
}
