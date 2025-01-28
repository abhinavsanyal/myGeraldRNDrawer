import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './TabNavigator'; // Adjust import path as needed
import CustomDrawerContent from '../components/CustomDrawerContent'; // Adjust path
import AnimatedScreenWrapper from '../components/AnimatedScreenWrapper'; // Adjust path

export type DrawerParamList = {
  Tabs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    // Provide SafeArea context to the entire app
    <SafeAreaProvider>
      <DrawerComponent />
    </SafeAreaProvider>
  );
}

function DrawerComponent() {
  return (
    <Drawer.Navigator
      // The critical part: wrap *all* your custom drawer content in a SafeAreaView
      drawerContent={(props) => (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#241c2b' }}>
          <CustomDrawerContent {...props} />
        </SafeAreaView>
      )}
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'transparent',
        // Keep the drawer’s background and width, but avoid forcing it behind the notch with flex:1
        drawerStyle: {
          backgroundColor: '#241c2b',
          width: 250,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        },
        drawerActiveBackgroundColor: '#241c2b',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: { color: '#fff' },
      }}
    >
      {/* Example drawer screen */}
      <Drawer.Screen
        name="Tabs"
        options={{ drawerLabel: 'Home' }}
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
