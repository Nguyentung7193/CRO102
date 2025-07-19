import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated, FlatList, Dimensions } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 100;

const DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  title: `Item ${i + 1}`,
}));

const USER = {
  name: 'Nguyễn Văn A',
  avatar: require('../../../assets/raiden.webp'),
};

const Lap3b3 = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const avatarOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const greetingOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const nameTranslateX = scrollY.interpolate({
  inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
  outputRange: [0, -100],
  extrapolate: 'clamp',
});
  const renderItem = ({ item, index }: { item: { id: string; title: string }; index: number }) => {
  const inputRange = [-1, 0, 80 * index, 80 * (index + 2)];
  const opacity = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });
  const translateY = scrollY.interpolate({
    inputRange,
    outputRange: [0, 0, 0, 20],
  });
  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0.5],
  });


  return (
    <Animated.View style={[
      styles.item,
      { opacity, transform: [{ translateY }, { scale }] }
    ]}>
      <Text style={styles.title}>{item.title}</Text>
    </Animated.View>
  );
};

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Animated.Image
          source={USER.avatar}
          style={[styles.avatar, { opacity: avatarOpacity }]}
        />
        <Animated.Text style={[styles.greeting, { opacity: greetingOpacity }]}>
          Xin chào
        </Animated.Text>
        <Animated.Text style={[styles.name, {
      transform: [{ translateX: nameTranslateX }],
    }]}>{USER.name}</Animated.Text>
      </Animated.View>
      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingTop: 8, paddingBottom: 24,marginTop:20 }}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default Lap3b3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: 20,
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end', // Đảm bảo các thành phần nằm phía dưới header
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    overflow: 'hidden',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
    backgroundColor: '#eee',
  },
  greeting: {
    fontSize: 18,
    color: '#555',
    marginBottom: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12, // Thêm margin để không bị cắt
  },
  item: {
    height: 64,
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#a259f7',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
    title: {
    fontSize: 18,
    color: '#333',
  },
});