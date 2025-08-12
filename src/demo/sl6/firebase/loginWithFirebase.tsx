/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { Alert, StyleSheet, Text, View,Button } from 'react-native';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

const loginWithFirebase = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>(null);
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  }, []);
  // Sign up
  const onSignUp = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword('tung@gmail.com','123456');
      Alert.alert('Sign Up Success', `Welcome ${userCredential.user.email}`);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
  
  // Sign in
  const onSignIn = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword('tung@gmail.com', '123456');
      Alert.alert('Sign In Success', `Welcome back ${userCredential.user.email}`);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Sign Up" onPress={onSignUp} />
      <Button title="Sign In" onPress={onSignIn} />
      {initializing ? (
        <Text>Loading...</Text>
      ) : user ? (
        <Text>Welcome, {user.email}</Text>
      ) : (
        <Text>Please sign in</Text>
      )}
      <Button title="Sign Out" onPress={() => auth().signOut()} />
    </View>
  );
};

export default loginWithFirebase;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    }
});
