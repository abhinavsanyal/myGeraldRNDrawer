// navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ContactScreen from '../screens/ContactScreen';

export type BottomTabParamList = {
  HomeStack: undefined;
  Contact: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{ title: 'Home' }}
      />
      <Tab.Screen 
        name="Contact" 
        component={ContactScreen} 
        options={{ title: 'Contact' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
