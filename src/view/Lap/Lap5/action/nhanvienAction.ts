import axios from 'axios';
import { NhanVien, addNhanVien, setNhanVien, updateNhanVien,deleteNhanVien } from '../reduces/nhanvienReducer';
import { AppDispatch } from '../../../../demo/sl5/redux/store/store';

const API_URL = 'http://10.0.2.2:3000/Nhanvien';

export const getListNhanVien = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch(setNhanVien(response.data));
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};
export const add1NhanVien = (nhanVien: NhanVien) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post(API_URL, nhanVien);
    dispatch(addNhanVien(response.data));
  } catch (error) {
    console.error('Error adding employee:', error);
  }
};

export const updateNhanVienAction = (nhanVien: NhanVien) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${nhanVien.maNV}`, nhanVien);
    dispatch(updateNhanVien(response.data));
  } catch (error) {
    console.error('Error updating employee:', error);
  }
};

export const deleteNhanVienAction = (maNV: string) => async (dispatch: AppDispatch) => {
  try {
    await axios.delete(`${API_URL}/${maNV}`);
    dispatch(deleteNhanVien(maNV));
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
};
