import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Colors } from "../constants/Colors";

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  const { navigation } = props;

  // Get current tab screen and params
  const tabState = props.state.routes.find(
    (route) => route.name === "Tabs"
  )?.state;
  const currentTabRoute = tabState?.routes[tabState?.index || 0];
  // Get the screen inside HomeStack
  const homeStackState = currentTabRoute?.state;
  const currentScreen = homeStackState?.routes[homeStackState?.index || 0];


  const isCurrentScreen = (screenName: string) => {
    // If there's no homeStackState (initial render), check if we're on the first tab
    if (!homeStackState) {
      return screenName === "Screen1";
    }
    return currentScreen?.name === screenName;
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Text style={styles.userName}>Beka</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.menuItem,
          isCurrentScreen("Screen1") && styles.activeMenuItem,
        ]}
        onPress={() =>
          navigation.navigate("Tabs", {
            screen: "HomeStack",
            params: { screen: "Screen1" },
          })
        }
      >
        <Text
          style={[
            styles.menuItemText,
            isCurrentScreen("Screen1") && styles.activeMenuItemText,
          ]}
        >
          Start
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.menuItem,
          isCurrentScreen("Screen2") && styles.activeMenuItem,
        ]}
        onPress={() =>
          navigation.navigate("Tabs", {
            screen: "HomeStack",
            params: { screen: "Screen2" },
          })
        }
      >
        <Text
          style={[
            styles.menuItemText,
            isCurrentScreen("Screen2") && styles.activeMenuItemText,
          ]}
        >
          Your Cart
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Favourites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Your Orders</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 150,
    backgroundColor: "#201c3e",
    justifyContent: "flex-start",
  },
  userContainer: {
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  menuItem: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
  },
  menuItemText: {
    color: "#fff",
    fontSize: 16,
  },
  activeMenuItem: {
    backgroundColor: Colors.light.activeMenuItem,
    borderRadius: 8,
  },
  activeMenuItemText: {
    color: Colors.light.activeMenuItemText, // modern iOS-style red
    fontWeight: "600",
  },
  separator: {
    marginVertical: 20,
    height: 1,
    backgroundColor: "#444",
  },
});
