import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const Lap3b1 = () => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const moveImage = () => {
    // Tạo giá trị ngẫu nhiên từ -150 đến 150
    const randomY = Math.floor(Math.random() * 301) - 150;
    translateY.value = withSpring(randomY);
  };

  return (
    <View style={styles.container}>
      <Button title="Di chuyển ảnh" onPress={moveImage} />
      <TouchableOpacity onPress={moveImage} activeOpacity={0.8}>
        <Animated.View style={[styles.imageBox, animatedStyle]}>
          <Image
            source={require('../../../assets/raiden.webp')}
            style={styles.image}
            resizeMode="cover"
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Lap3b1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    marginTop: 32,
    width: 120,
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});