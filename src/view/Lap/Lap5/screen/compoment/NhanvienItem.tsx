import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Nhanvien = {
  maNV: string;
  phongBan: string;
  diaChi: number;
  sdt: string;
};

type Props = {
  nhanvien: Nhanvien;
  onEdit?: (nhanvien: Nhanvien) => void;
  onDelete?: (id: string) => void;
};

const NhanvienItem = ({ nhanvien, onEdit, onDelete }: Props) => {
  return (
     <View style={styles.itemContainer}>
            <Text style={styles.name}>{nhanvien.maNV}</Text>
            <Text style={styles.price}>{nhanvien.phongBan}</Text>
            <Text style={styles.price}>{nhanvien.diaChi}</Text>
            <Text style={styles.price}>{nhanvien.sdt}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.editButton]}
                onPress={() => onEdit && onEdit(nhanvien)}
              >
                <Text style={styles.buttonText}>Sửa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.deleteButton]}
                onPress={() => onDelete && onDelete(nhanvien.maNV)}
              >
                <Text style={styles.buttonText}>Xoá</Text>
              </TouchableOpacity>
            </View>
        </View>
  )
}

export default NhanvienItem

const styles = StyleSheet.create({
     itemContainer: {
    flexDirection: 'column',
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
})