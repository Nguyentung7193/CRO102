import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import Input from '../lap1/Input';

type BodyProps = {
    onUpdateUser: (name: string, avatar: string) => void;
    onChangeFooterBg: () => void;
};

const Body: React.FC<BodyProps> = React.memo(({ onUpdateUser, onChangeFooterBg }) => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');

    return (
        <View style={styles.body}>
            <Input
                title={"Nhập tên"}
                value={name}
                placeholder='Nhập tên'
                onChangeText={setName} />
            <Input
                title={"Nhập link avatar"}
                value={avatar}
                placeholder='Nhập link ảnh đại diện'
                onChangeText={setAvatar} />
            <View style={styles.buttonRow}>
                <Button title="Cập nhật thông tin" onPress={() => onUpdateUser(name, avatar)} />
                <Button title="Đổi màu footer" onPress={onChangeFooterBg} color="#007AFF" />
            </View>
        </View>
    );
});

export default Body;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        backgroundColor: '#f5f5f5',
        fontSize: 16,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
});