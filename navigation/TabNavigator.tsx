import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ContactScreen from "../screens/ContactUsScreen";
import { IconSymbol } from "../components/ui/IconSymbol.ios";

export type TabParamList = {
  HomeStack: undefined;
  Contact: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="house.fill" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: "Contact",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="phone.fill" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
