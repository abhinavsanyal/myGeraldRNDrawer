// navigation/DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';

export type DrawerParamList = {
  Tabs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        // Basic styling; you can fine-tune
        headerShown: false,
      }}
    >
      <Drawer.Screen 
        name="Tabs" 
        component={TabNavigator} 
        options={{ drawerLabel: 'Home' }}
      />
      {/*
        Add other screens here if you want them to appear in the drawer.
        e.g., <Drawer.Screen name="Profile" component={Profile} />
      */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
