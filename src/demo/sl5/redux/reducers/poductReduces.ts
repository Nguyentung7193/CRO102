/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';

 export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
};
interface ProductState {
  listProducts: Product[];
};
const initialState: ProductState = {
  listProducts: [],
};
const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.listProducts = action.payload;
        },
        addProduct: (state, action) => {
          state.listProducts.push(action.payload);
        },
        updateproduct: (state, action) => {
          const index = state.listProducts.findIndex(product => product.id === action.payload.id);
          if (index !== -1) {
            state.listProducts[index] = action.payload;
          }
        },
        deleteProduct: (state, action) => {
          state.listProducts = state.listProducts.filter(product => product.id !== action.payload);
        },
    }
});
export const {setProducts, addProduct,updateproduct} = ProductSlice.actions;
export default ProductSlice.reducer;