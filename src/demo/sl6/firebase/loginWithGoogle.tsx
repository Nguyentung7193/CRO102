/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const LoginWithFirebase = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>(null);

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '55087379690-n7qu24rcdg5i2smhp0s92e0jr84fhk9e.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true, // Thêm dòng này
    });

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function onSignInWithGoogle() {
    try {
      // Kiểm tra Play Services
      await GoogleSignin.hasPlayServices({ 
        showPlayServicesUpdateDialog: true 
      });

      // Đăng xuất trước khi đăng nhập (để tránh cache cũ)
      await GoogleSignin.signOut();

      // Đăng nhập với Google
      const userInfo = await GoogleSignin.signIn();
      console.log('Google Sign-In User Info:', userInfo);

      // Lấy ID token từ getTokens()
      const { idToken } = await GoogleSignin.getTokens();

      if (!idToken) {
        Alert.alert('Google Sign In failed', 'No ID token received');
        console.error('No ID token received from Google Sign In');
        return;
      }

      // Tạo credential từ Google
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
      // Đăng nhập Firebase với credential
      const result = await auth().signInWithCredential(googleCredential);
      console.log('Firebase Auth Result:', result);

    } catch (error: any) {
      console.error('Error signing in with Google:', error);
      
      // Xử lý các loại lỗi cụ thể
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Cancelled', 'Sign-in was cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('In Progress', 'Sign-in is already in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play Services', 'Play Services not available or outdated');
      } else if (error.code === 'DEVELOPER_ERROR') {
        Alert.alert(
          'Configuration Error', 
          'Please check SHA-1 fingerprint and webClientId configuration'
        );
      } else {
        Alert.alert('Login failed', error.message || 'Something went wrong');
      }
    }
  }

  async function onSignOut() {
    try {
      // Đăng xuất khỏi Google và Firebase
      await GoogleSignin.signOut();
      await auth().signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In with Google" onPress={onSignInWithGoogle} />
      {initializing ? (
        <Text>Loading...</Text>
      ) : user ? (
        <Text>Welcome, {user.email}</Text>
      ) : (
        <Text>Please sign in</Text>
      )}
      {user && <Button title="Sign Out" onPress={onSignOut} />}
    </View>
  );
};

export default LoginWithFirebase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});