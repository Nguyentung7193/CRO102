/* eslint-disable @typescript-eslint/no-unused-vars */
import {configureStore} from '@reduxjs/toolkit';
import countReducer from '../reducers/count';
import productReducer from '../reducers/poductReduces';


const store = configureStore({
    reducer: {
        count: countReducer,
        product: productReducer,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;