import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

const DemoAnimation = () => {
    const width = useSharedValue(100);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(width.value, { duration: 500 }), // dùng withTiming để mượt
        };
    });

    const handlePress = () => {
        width.value = width.value + 50;
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyle]} />
            <Button title='Press me' onPress={handlePress} />
            <Text>Demo Animation</Text>
        </View>
    );
};

export default DemoAnimation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    box: {
        height: 100,
        backgroundColor: 'blue'
    }
});
