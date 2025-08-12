/* eslint-disable @typescript-eslint/no-unused-vars */
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../demo/sl5/redux/hooks';
import { add1NhanVien, getListNhanVien } from '../action/nhanvienAction';
import { useFocusEffect } from '@react-navigation/native';
import NhanvienItem from './compoment/NhanvienItem';
import { deleteNhanVien, NhanVien, updateNhanVien } from '../reduces/nhanvienReducer';

const NhanVienScreen = () => {
    // const listProduct = useAppSelector(state => state.product.listProducts);
    const listNhanVien = useAppSelector(state => state.nhanvien.listNhanvien);
    const dispatch = useAppDispatch();
      useEffect(() => {
        dispatch(getListNhanVien());
      }, [dispatch]);
        useFocusEffect(
        useCallback(() => {
          dispatch(getListNhanVien());
        }, [dispatch])
      );
  const handleAddNhanVien = () => {
    const newNhanVien = {
      maNV: Date.now().toString(),
      phongBan: 'New Department',
      diaChi: 123,
      sdt: '0123456789',
    };
    dispatch(add1NhanVien(newNhanVien));
  };
  const handleUpdateNhanVien = (nhanvien: NhanVien) => {
    const updatedNhanVien = {
      ...nhanvien,
      phongBan: 'Updated Department',
      diaChi: nhanvien.diaChi + 1,
      sdt: '0395257193',
    };
    dispatch(updateNhanVien(updatedNhanVien));
  };
  const handleDeleteNhanVien = (maNV: string) => {
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
          onPress: () => dispatch(deleteNhanVien(maNV)),
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={{ flex: 1, marginTop: 50}}>
      {/* <Button title="Thêm sản phẩm" onPress={handleAddProduct} /> */}
      <FlatList
        data={listNhanVien}
        renderItem={({ item }) => (
          <NhanvienItem
            nhanvien={item}
            onDelete={handleDeleteNhanVien}
            onEdit={handleUpdateNhanVien}
          />
        )}
        keyExtractor={item => item.maNV}
      />
    </View>
  )
}

export default NhanVienScreen

const styles = StyleSheet.create({})