import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'loginScreen'>;

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '55087379690-n7qu24rcdg5i2smhp0s92e0jr84fhk9e.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const onSignIn = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Đăng nhập thành công', `Chào mừng ${userCredential.user.email}`);
    } catch (error: any) {
      Alert.alert('Đăng nhập thất bại', error.message);
    }
  };

  // Hàm đăng nhập Google giữ nguyên như loginWithGoogle.tsx
  async function onSignInWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google Sign-In User Info:', userInfo);

      const { idToken } = await GoogleSignin.getTokens();

      if (!idToken) {
        Alert.alert('Google Sign In failed', 'No ID token received');
        console.error('No ID token received from Google Sign In');
        return;
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const result = await auth().signInWithCredential(googleCredential);
      console.log('Firebase Auth Result:', result);
      Alert.alert('Đăng nhập thành công', `Chào mừng ${result.user.displayName || result.user.email}`);
    } catch (error: any) {
      console.error('Error signing in with Google:', error);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Đăng nhập" onPress={onSignIn} />
      <View style={styles.divider} />
      <Button title="Đăng nhập bằng Google" onPress={onSignInWithGoogle} color="#4285F4" />
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.registerText}>
          Chưa có tài khoản? <Text style={{ color: '#4285F4', fontWeight: 'bold' }}>Đăng ký</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  divider: {
    height: 16,
  },
  registerText: {
    marginTop: 24,
    fontSize: 16,
    color: '#333',
  },
});