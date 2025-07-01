import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
type MyComponentProps = {
  children: ReactNode;
  backgroundColor?: string;
};

const Wrapper = ({children, backgroundColor= "blue"}: MyComponentProps) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            {children}
        </View>
    )
}

export default Wrapper

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    }
});