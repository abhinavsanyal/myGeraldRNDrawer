import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabNavigator from "./TabNavigator";
import CustomDrawerContent from "../components/CustomDrawerContent";
import AnimatedScreenWrapper from "../components/AnimatedScreenWrapper";
import { Colors } from "../constants/Colors";

export type DrawerParamList = {
  Tabs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: "slide",
        overlayColor: "transparent",
        drawerStyle: {
          backgroundColor: Colors.light.backgroundContainer,
          width: 150,
        },
        sceneStyle : {
            overflow: "hidden",
        },
        drawerContentContainerStyle: {
          marginTop: insets.top,
          marginBottom: insets.bottom,
        },
      }}
    >
      <Drawer.Screen
        name="Tabs"
        options={{
          headerShown: false, // Note := > Kept this OFF for better standardized UX on both iOS and Android
        }}
      >
        {(props) => (
          <AnimatedScreenWrapper {...props}>
            <TabNavigator />
          </AnimatedScreenWrapper>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
