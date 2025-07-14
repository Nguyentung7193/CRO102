import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

type HeaderProps = {
    title?: string;
    onBackPress?: () => void;
    imageSource?: any;
};

const Header: React.FC<HeaderProps> = ({ title, onBackPress, imageSource }) => {
    return (
        <View style={styles.container}>
            {onBackPress ? (
                <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
            ) : (
                <View style={{ width: 32 }} /> // giữ layout cân đối nếu không có nút back
            )}

            {title ? (
                <Text style={styles.title}>{title}</Text>
            ) : (
                <View style={{ flex: 1 }} />
            )}

            {imageSource ? (
                <Image source={imageSource} style={styles.image} resizeMode="contain" />
            ) : (
                <View style={{ width: 32 }} /> // giữ layout cân đối nếu không có image
            )}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    backButton: {
        padding: 8,
        width: 32,
        alignItems: 'center',
    },
    backText: {
        fontSize: 20,
        color: '#007AFF',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 32,
        height: 32,
    },
});
