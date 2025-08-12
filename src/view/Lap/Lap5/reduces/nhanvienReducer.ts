import {createSlice} from '@reduxjs/toolkit';

 export interface NhanVien {
  maNV: string;
  phongBan: string;
  diaChi: number;
  sdt: string;
};
interface NhanVienState {
  listNhanvien: NhanVien[];
};
const initialState: NhanVienState = {
  listNhanvien: [],
};
const NhanVienSlice = createSlice({
    name: 'nhanvien',
    initialState,
    reducers: {
        setNhanVien: (state, action) => {
            state.listNhanvien = action.payload;
        },
        addNhanVien: (state, action) => {
          state.listNhanvien.push(action.payload);
        },
        updateNhanVien: (state, action) => {
          const index = state.listNhanvien.findIndex(nhanvien => nhanvien.maNV === action.payload.maNV);
          if (index !== -1) {
            state.listNhanvien[index] = action.payload;
          }
        },
        deleteNhanVien: (state, action) => {
          state.listNhanvien = state.listNhanvien.filter(nhanvien => nhanvien.maNV !== action.payload);
        },
    }
});
export const {setNhanVien, addNhanVien, updateNhanVien,deleteNhanVien} = NhanVienSlice.actions;
export default NhanVienSlice.reducer;