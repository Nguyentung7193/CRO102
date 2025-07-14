// src/navigation/StackNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../view/home/HomeScreen';
import Lap1 from '../view/Lap/Lap1/Lap1';
import Lap2 from '../view/Lap/Lap2/Lap2';

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: string };
  Lap1: undefined;
  Lap2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Lap2" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Lap1" component={Lap1} />
      <Stack.Screen name="Lap2" component={Lap2} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
