import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerNavigator from "./navigation/DrawerNavigator";

export default function App() {
  return (
    // Single SafeAreaProvider at the TOP LEVEL
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
