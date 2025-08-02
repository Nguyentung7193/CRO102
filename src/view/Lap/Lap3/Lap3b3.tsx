/* eslint-disable @typescript-eslint/no-unused-vars */
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
        <View style={styles.itemContent}>
          <Text style={styles.itemNumber}>#{index + 1}</Text>
          <View style={styles.itemTextContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>Click for more details →</Text>
          </View>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <View style={styles.headerContent}>
          <Animated.Image
            source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
            style={[styles.avatar, { opacity: avatarOpacity }]}
          />
          <View style={styles.textContainer}>
            <Animated.Text style={[styles.greeting, { opacity: greetingOpacity }]}>
              Xin chào
            </Animated.Text>
            <Text style={styles.name}>{USER.name}</Text>
          </View>
        </View>
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
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    overflow: 'hidden',
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  textContainer: {
    marginLeft: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
  },
  item: {
    height: 80,
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    borderLeftWidth: 4,
    borderLeftColor: '#a259f7',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  itemNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a259f7',
    marginRight: 12,
    width: 32,
  },
  itemTextContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});