import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
};

const ProductItem = ({ product, onEdit, onDelete }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price} đ</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() => onEdit && onEdit(product)}
          >
            <Text style={styles.buttonText}>Sửa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={() => onDelete && onDelete(product.id)}
          >
            <Text style={styles.buttonText}>Xoá</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#a259f7',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  editButton: {
    backgroundColor: '#ffd700',
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: '#ff4d4f',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});