// screens/Screen1.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../navigation/HomeStack';

type Screen1Props = {
  navigation: StackNavigationProp<HomeStackParamList, 'Screen1'>;
};

const Screen1: React.FC<Screen1Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen1</Text>
      <Button
        title="Go to Screen2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

export default Screen1;
