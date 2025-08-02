import { AppDispatch } from '../store/store';
import { increment, decrement, reset, incrementByAmount } from '../reducers/count';

export const incrementAction = () => (dispatch: AppDispatch) => {
    dispatch(increment());
};

export const decrementAction = () => (dispatch: AppDispatch) => {
    dispatch(decrement());
};

export const resetAction = () => (dispatch: AppDispatch) => {
    dispatch(reset());
};

export const incrementByAmountAction = (amount: number) => (dispatch: AppDispatch) => {
    dispatch(incrementByAmount(amount));
};
