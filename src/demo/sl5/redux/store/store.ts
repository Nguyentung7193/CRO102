/* eslint-disable @typescript-eslint/no-unused-vars */
import {configureStore} from '@reduxjs/toolkit';
import countReducer from '../reducers/count';
import productReducer from '../reducers/poductReduces';
import nhanvienReducer from '../../../../view/Lap/Lap5/reduces/nhanvienReducer';
import characterReducer from '../../../../view/Lap/Lap6/reduces/charaterReducer';


const store = configureStore({
    reducer: {
        count: countReducer,
        product: productReducer,
        nhanvien: nhanvienReducer,
        character: characterReducer,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;