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
    outputRange: [1, 1, 1, 0.5],
  });

  return (
    <Animated.View style={[
      styles.item,
      { opacity, transform: [{ translateY }, { scale }] }
    ]}>
      <View style={styles.itemContent}>
        <Text style={styles.itemNumber}>{index + 1}</Text>
        <View style={styles.itemTextContainer}>
          <Text style={styles.title}>Item {item.title}</Text>
          <Text style={styles.subtitle}>Tap to view details</Text>
        </View>
      </View>
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
    backgroundColor: '#f5f5f5',
    marginTop: 20,
  },
  item: {
    height: 90,
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    borderLeftWidth: 6,
    borderLeftColor: '#a259f7',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  itemNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a259f7',
    marginRight: 16,
    width: 36,
    textAlign: 'center',
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