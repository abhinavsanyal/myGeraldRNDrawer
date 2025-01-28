// screens/Screen1.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../navigation/HomeStack';

type Screen1Props = {
  navigation: StackNavigationProp<HomeStackParamList, 'Screen1'>;
};

export default function Screen1({ navigation }: Screen1Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen1</Text>
      <Button
        title="Go to Screen2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
});
