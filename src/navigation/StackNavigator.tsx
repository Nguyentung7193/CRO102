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
import CameraComponent from '../demo/sl4/CameraComponent';
import MusicPlayerScreen from '../demo/sl4/ MusicPlayerScreen';
import CountScreen from '../demo/sl5/redux/screens/countScreen';
import ProductListScreen from '../demo/sl5/screens/ProductListScreen';
import NhanVienScreen from '../view/Lap/Lap5/screen/NhanVienScreen';
import loginWithFirebase from '../demo/sl6/firebase/loginWithFirebase';
import CharaterScreen from '../view/Lap/Lap6/screen/charaterScreen';
import loginWithGoogle from '../demo/sl6/firebase/loginWithGoogle';
import LoginScreen from '../view/Lap/Lap7/logiScreen';
import RegisterScreen from '../view/Lap/Lap7/registerScreen';
import AddCharaterScreen from '../view/Lap/Lap6/screen/addCharaterScreen';

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
  CameraComponent: undefined;
  MusicPlayer: undefined;
  // slide 5
  countScreen: undefined;
  ProductListScreen: undefined;
  NhanVienScreen: undefined;
  CharaterScreen: undefined;
  AddCharaterScreen: undefined;

  loginWithFirebase: undefined;
  loginWithGoogle: undefined;
  // lap7
  loginScreen: undefined;
  RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="loginScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Lap1" component={Lap1} />
      <Stack.Screen name="Lap2" component={Lap2} />
      <Stack.Screen name="Lap3b1" component={Lap3b1} />
      <Stack.Screen name="Lap3b2" component={Lap3b2} />
      <Stack.Screen name="Lap3b3" component={Lap3b3} />
      {/* slide 3 */}
      <Stack.Screen name="demoAnimation" component={demoAnimation} /> 
      {/* slide 4 */}
      <Stack.Screen name="CameraComponent" component={CameraComponent} />
      <Stack.Screen name="MusicPlayer" component={MusicPlayerScreen} />
      {/* Slide5 */}
      <Stack.Screen name="countScreen" component={CountScreen} />
      <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
      {/* Add other screens here */}
      {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
      <Stack.Screen name="NhanVienScreen" component={NhanVienScreen} />
      <Stack.Screen name="CharaterScreen" component={CharaterScreen} />
      <Stack.Screen name="AddCharaterScreen" component={AddCharaterScreen} />
      <Stack.Screen name="loginWithFirebase" component={loginWithFirebase} />
      <Stack.Screen name="loginWithGoogle" component={loginWithGoogle} />
      {/* Lap 7 */}
      <Stack.Screen name="loginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
      
  );
};

export default StackNavigator;
