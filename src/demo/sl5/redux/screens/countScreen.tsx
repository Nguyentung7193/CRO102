/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { decrementAction, incrementAction, resetAction, incrementByAmountAction } from '../action/countAction';
import { useAppDispatch, useAppSelector } from '../hooks';


const CountScreen = () => {
    const count = useAppSelector((state) => state.count.count);
    const dispatch = useAppDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Count: {count}</Text>
            <Button title='Tang' onPress={() => dispatch(incrementAction())} />
            <Button title='Giam' onPress={() => dispatch(decrementAction())} />
            <Button title='Reset' onPress={() => dispatch(resetAction())} />
            <Button title='Tang theo so' onPress={() => dispatch(incrementByAmountAction(5))} />
        </View>
    );
};

export default CountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

        // padding: 20,
        // paddingVertical: 50,
        // marginTop: 50,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
