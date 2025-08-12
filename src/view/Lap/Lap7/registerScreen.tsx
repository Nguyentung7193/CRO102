import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onRegister = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Đăng ký thành công', `Chào mừng ${userCredential.user.email}`);
      navigation.goBack();
    } catch (error: any) {
      Alert.alert('Đăng ký thất bại', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
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
      <Button title="Đăng ký" onPress={onRegister} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.loginText}>
          Đã có tài khoản? <Text style={{ color: '#4285F4', fontWeight: 'bold' }}>Đăng nhập</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

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
  loginText: {
    marginTop: 24,
    fontSize: 16,
    color: '#333',
  },
});