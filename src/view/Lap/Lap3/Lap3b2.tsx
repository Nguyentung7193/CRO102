import React from 'react';
import { StyleSheet, View, Animated, FlatList, Text } from 'react-native';

const DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  title: `Item ${i + 1}`,
}));

const Lap3b2 = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

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
    outputRange: [1, 1, 1, 0.5], // Thu nhỏ lại khi cuộn
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
      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{ paddingVertical: 24 }}
      />
    </View>
  );
};

export default Lap3b2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: 20,
  },
  item: {
    height: 80,
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
  title: {
    fontSize: 18,
    color: '#333',
  },
});