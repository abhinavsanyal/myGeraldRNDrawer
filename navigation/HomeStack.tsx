import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import { TouchableOpacity, Text } from "react-native";
import { Colors } from "../constants/Colors";
export type HomeStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator   
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: Colors.light.text,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "thin",
          marginLeft: 10,
          color: Colors.light.text,
          letterSpacing: 4,
        },
        // This places our hamburger icon at the left
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 15 }}
            onPress={() => navigation.getParent()?.openDrawer()}
          >
            <Text
              style={{ color: Colors.light.text, fontSize: 40, fontWeight: "thin" }}
            >
              ☰
            </Text>
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ title: "START" }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ title: "Screen2" }}
      />
    </Stack.Navigator>
  );
}
