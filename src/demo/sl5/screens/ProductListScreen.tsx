/* eslint-disable @typescript-eslint/no-unused-vars */
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  add1Product,
  deleteProduct,
  getListProduct,
  updateProduct,
} from '../redux/action/product';
import ProductItem from './compoments/ProductItem';
import { Product } from '../redux/reducers/poductReduces';
import { useFocusEffect } from '@react-navigation/native';

const ProductListScreen = () => {
  const listProduct = useAppSelector(state => state.product.listProducts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);
    useFocusEffect(
    useCallback(() => {
      dispatch(getListProduct());
    }, [dispatch])
  );
  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now().toString(),
      name: 'New Product',
      price: 100,
      image: 'https://via.placeholder.com/150',
    };
    dispatch(add1Product(newProduct));
  };
  const handleUpdateProduct = (product: Product) => {
    const updatedProduct = {
      ...product,
      name: 'Updated Product',
      price: product.price + 10,
    };
    dispatch(updateProduct(updatedProduct));
  };
  const handleDeleteProduct = (id: string) => {
    Alert.alert(
      'Xoá sản phẩm',
      'Bạn có chắc chắn muốn xoá sản phẩm này?',
      [
        {
          text: 'Huỷ',
          style: 'cancel',
        },
        {
          text: 'Xoá',
          onPress: () => dispatch(deleteProduct(id)),
        },
      ],
      { cancelable: false },
    );
  };
  return (
    <View style={{ flex: 1, marginTop: 50}}>
      <Button title="Thêm sản phẩm" onPress={handleAddProduct} />
      <FlatList
        data={listProduct}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onEdit={handleUpdateProduct}
            onDelete={handleDeleteProduct}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({});
