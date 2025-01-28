import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Beka</Text>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Tabs', {
          screen: 'HomeStack',
          params: { screen: 'Screen1' },
        })}
      >
        <Text style={styles.menuItemText}>Start</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Tabs', {
          screen: 'HomeStack',
          params: { screen: 'Screen2' },
        })}
      >
        <Text style={styles.menuItemText}>Your Cart</Text>
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
    flex: 1,               // Ensures it fills the drawer space
    paddingHorizontal: 20,
    paddingTop: 20,        // or 0 if you prefer
    backgroundColor: '#241c2b',
  },
  userName: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 30,
  },
  menuItem: {
    marginVertical: 10,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 16,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#444',
  },
});
