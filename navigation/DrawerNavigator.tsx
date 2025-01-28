import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabNavigator from "./TabNavigator";
import CustomDrawerContent from "../components/CustomDrawerContent";
import AnimatedScreenWrapper from "../components/AnimatedScreenWrapper";

export type DrawerParamList = {
  Tabs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const insets = useSafeAreaInsets(); // Use device's safe area insets

  return (
    <Drawer.Navigator
      // Provide your custom drawer content
      drawerContent={(props) => <CustomDrawerContent {...props} />}

      screenOptions={{
        drawerType: "slide",
        overlayColor: "transparent",

        // The actual drawer box style
        drawerStyle: {
          backgroundColor: "#241c2b",
          width: 150,
          borderTopLeftRadius: 30,
        },

        // This ensures we add safe-area padding at the top & bottom 
        // so the drawer won't overlap the notch or home indicator
        drawerContentContainerStyle: {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },

        // Colors
        drawerActiveBackgroundColor: "#241c2b",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
        drawerLabelStyle: { color: "#fff" },
      }}
    >
      <Drawer.Screen name="Tabs" options={{ drawerLabel: "Home" }}>
        {(props) => (
          <AnimatedScreenWrapper {...props}>
            <TabNavigator />
          </AnimatedScreenWrapper>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
