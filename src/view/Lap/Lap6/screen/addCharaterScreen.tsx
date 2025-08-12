// AddCharaterScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../../../demo/sl5/redux/hooks';
import { addCharacter } from '../action/charaterAction';

const AddCharaterScreen = () => {
  const [name, setName] = useState('');
  const [land, setLand] = useState('');
  const [des, setDes] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const handleAdd = () => {
    const newCharater = {
      id: Date.now(),
      name,
      land,
      des,
      image,
    };
    dispatch(addCharacter(newCharater));
    navigation.goBack();
  };

  return (
    <View style={styles.contaier}>
      <TextInput style={styles.input} placeholder="Tên" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Land" value={land} onChangeText={setLand} />
      <TextInput style={styles.input} placeholder="Mô tả" value={des} onChangeText={setDes} />
      <TextInput style={styles.input} placeholder="Ảnh" value={image} onChangeText={setImage} />
      <Button title="Thêm mới" onPress={handleAdd} />
    </View>
  );
};

export default AddCharaterScreen;
const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  }
});