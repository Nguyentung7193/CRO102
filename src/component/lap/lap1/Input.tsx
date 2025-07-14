import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Animated, TouchableOpacity, Image } from 'react-native';

type InputProps = {
    title: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    error?: string;
};

const Input: React.FC<InputProps> = ({ title, value, onChangeText, placeholder, error }) => {
    const [isFocused, setIsFocused] = useState(false);
    const getBorderColor = () => {
        if (error) return '#FF3B30';
        if (isFocused) return '#007AFF';
        if (value) return '#90caf9';
        return '#ccc';
    };

    const getBackgroundColor = () => {
        if (error) return '#ffeaea';
        if (isFocused) return '#e3f2fd';
        return '#f5f5f5'; // nền xám mặc định
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{title}</Text>
            <View style={[
                styles.inputContainer,
                {
                    borderColor: getBorderColor(),
                    backgroundColor: getBackgroundColor(),
                }
            ]}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor="#999"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {error ? (
                    <Image
                        source={require('../../../assets/raiden.webp')}
                        style={styles.icon}
                    />
                ) : null}
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#222',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#f5f5f5',
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 10,
        color: '#222',
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 8,
        tintColor: '#FF3B30',
        borderRadius: 10, // Bo tròn góc icon
    },
    errorText: {
        color: '#FF3B30',
        fontSize: 13,
        marginTop: 4,
    },
});