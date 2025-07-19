// src/navigation/StackNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../view/home/HomeScreen';
import Lap1 from '../view/Lap/Lap1/Lap1';
import Lap2 from '../view/Lap/Lap2/Lap2';
import demoAnimation from '../demo/sl3/demoAnimation';
import Lap3b1 from '../view/Lap/Lap3/Lap3b1';
import Lap3b2 from '../view/Lap/Lap3/Lap3b2';
import Lap3b3 from '../view/Lap/Lap3/Lap3b3';

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: string };
  Lap1: undefined;
  Lap2: undefined;
  Lap3b1: undefined;
  Lap3b2: undefined;
  Lap3b3: undefined;


  // demo
  demoAnimation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Lap3b3" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Lap1" component={Lap1} />
      <Stack.Screen name="Lap2" component={Lap2} />
      <Stack.Screen name="Lap3b1" component={Lap3b1} />
      <Stack.Screen name="Lap3b2" component={Lap3b2} />
      <Stack.Screen name="Lap3b3" component={Lap3b3} />
      
      {/* Add other screens here as needed */}
      {/* demo */}
      <Stack.Screen name="demoAnimation" component={demoAnimation} />
      {/* Add other screens here as needed */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
