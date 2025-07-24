import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { UserType } from '../../../view/Lap/Lap2/Lap2';

type HeaderProps = {
    user: UserType;
};

const Header: React.FC<HeaderProps> = React.memo(({ user }) => {
    return (
        <View style={styles.header}>
            <Image
                source={user.avatar ? { uri: user.avatar } : { uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
                style={styles.avatar}
            />
            <View>
                <Text style={styles.greeting}>Xin chào</Text>
                <Text style={styles.name}>{user.name}</Text>
            </View>
        </View>
    );
});

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16,
        backgroundColor: '#eee',
    },
    greeting: {
        fontSize: 16,
        color: '#555',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
    },
});