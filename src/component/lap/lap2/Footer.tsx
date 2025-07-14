import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type FooterProps = {
    lastUpdate: Date | null;
    backgroundColor: string;
};

const Footer: React.FC<FooterProps> = React.memo(({ lastUpdate, backgroundColor }) => {
    const formatDate = (date: Date) => {
        const pad = (n: number) => n < 10 ? `0${n}` : n;
        return `${pad(date.getHours())}:${pad(date.getMinutes())} - ${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
    };

    return (
        <View style={[styles.footer, { backgroundColor }]}>
            <Text style={styles.text}>
                {lastUpdate
                    ? `Cập nhật lần cuối: ${formatDate(lastUpdate)}`
                    : 'Chưa cập nhật thông tin'}
            </Text>
        </View>
    );
});

export default Footer;

const styles = StyleSheet.create({
    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems: 'center',
    },
    text: {
        color: '#333',
        fontSize: 15,
    },
});