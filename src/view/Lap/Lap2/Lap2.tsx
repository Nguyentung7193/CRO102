import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../../component/lap/lap2/Header';
import Body from '../../../component/lap/lap2/Body';
import Footer from '../../../component/lap/lap2/Footer';

export type UserType = {
    name: string;
    avatar: string;
};

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const Lap2 = () => {
    const [user, setUser] = useState<UserType>({ name: 'User', avatar: '' });
    const [footerBg, setFooterBg] = useState('#eee');
    const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

    const handleUpdateUser = useCallback((name: string, avatar: string) => {
        setUser({ name, avatar });
        setLastUpdate(new Date());
    }, []);

    const handleChangeFooterBg = useCallback(() => {
        setFooterBg(getRandomColor());
    }, []);

    return (
        <View style={styles.container}>
            <Header user={user} />
            <Body onUpdateUser={handleUpdateUser} onChangeFooterBg={handleChangeFooterBg} />
            <Footer lastUpdate={lastUpdate} backgroundColor={footerBg} />
        </View>
    );
};

export default Lap2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        marginVertical: 30,
    },
});