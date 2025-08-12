/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Alert,
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../demo/sl5/redux/hooks';
import { useFocusEffect } from '@react-navigation/native';
import { addCharacter, getListCharacter } from '../action/charaterAction';
import {
  Charater,
  deleteCharater,
  updateCharater,
} from '../reduces/charaterReducer';
import CharaterItem from './compoment/charaterItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../navigation/StackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'CharaterScreen'>;

const CharaterScreen = ({ navigation }: Props) => {
  const listCharater = useAppSelector(state => state.character.listCharater);
  const [visible, setVisible] = useState(false);
  const [editData, setEditData] = useState<Charater | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getListCharacter());
  }, [dispatch]);
  useFocusEffect(
    useCallback(() => {
      dispatch(getListCharacter());
    }, [dispatch]),
  );
  const handleAddNhanVien = () => {
    navigation.navigate('AddCharaterScreen');
  };
  const handleUpdateNhanVien = (character: Charater) => {
    setEditData(character);
    setVisible(true);
  };
  const handleSaveEdit = () => {
    if (editData) {
      dispatch(updateCharater(editData));
      setVisible(false);
    }
  };
  const handleDeleteNhanVien = (id: string) => {
    Alert.alert(
      'Xoá nhân viên',
      'Bạn có chắc chắn muốn xoá nhân viên này?',
      [
        {
          text: 'Huỷ',
          style: 'cancel',
        },
        {
          text: 'Xoá',
          onPress: () => dispatch(deleteCharater(id)),
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={{ flex: 1, marginTop: 50, padding: 20 }}>
      {/* <Button title="Thêm sản phẩm" onPress={handleAddProduct} /> */}
      <FlatList
      style={{ flex: 1, marginBottom: 20 }}
        data={listCharater}
        renderItem={({ item }) => (
          <CharaterItem
            charater={item}
            onDelete={handleDeleteNhanVien}
            onEdit={handleUpdateNhanVien}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Button title="Thêm nhân viên" onPress={handleAddNhanVien} />
      <Modal visible={visible} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000088',
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              padding: 20,
              borderRadius: 12,
              width: '80%',
            }}
          >
            <Text>Sửa nhân viên</Text>
            <TextInput
              value={editData?.name || ''}
              onChangeText={text =>
                setEditData(prev => (prev ? { ...prev, name: text } : prev))
              }
              placeholder="Tên"
              style={{ borderBottomWidth: 1, marginBottom: 12 }}
            />
            <TextInput
              value={editData?.land || ''}
              onChangeText={text =>
                setEditData(prev => (prev ? { ...prev, land: text } : prev))
              }
              placeholder="Land"
              style={{ borderBottomWidth: 1, marginBottom: 12 }}
            />
            <TextInput
              value={editData?.des || ''}
              onChangeText={text =>
                setEditData(prev => (prev ? { ...prev, des: text } : prev))
              }
              placeholder="Mô tả"
              style={{ borderBottomWidth: 1, marginBottom: 12 }}
            />
            <TextInput
              value={editData?.image || ''}
              onChangeText={text =>
                setEditData(prev => (prev ? { ...prev, image: text } : prev))
              }
              placeholder="Ảnh"
              style={{ borderBottomWidth: 1, marginBottom: 12 }}
            />
            <Button title="Lưu" onPress={handleSaveEdit} />
            <Button title="Huỷ" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CharaterScreen;

const styles = StyleSheet.create({});
