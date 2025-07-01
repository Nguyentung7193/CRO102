import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type SectionViewProps = {
    title?: string;
    backgroundColor?: string;
    textColor?: string;
    tenSuKien?: string;
    NgayDienRa?: string;
    diaDiem?: string;
    thoiGian?: string;
    hinhAnh?: any;
}

const SectionView = ({
    title = 'Default Title',
    backgroundColor = 'white',
    textColor = 'black',
    tenSuKien,
    NgayDienRa,
    diaDiem,
    thoiGian,
    hinhAnh,
}: SectionViewProps) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.sectionContainer, { backgroundColor }]}>
                <Text style={{ color: textColor }}>{tenSuKien}</Text>
                <Text style={{ color: textColor }}>{NgayDienRa}</Text>
                <Text style={{ color: textColor }}>{diaDiem}</Text>
                <Text style={{ color: textColor }}>{thoiGian}</Text>
                {hinhAnh && <Image source={hinhAnh} style={{ width: 100, height: 100 }} />}
            </View>
            <Text style={{ color: textColor }}>This is a section view</Text>
        </View>
    )
}

export default SectionView

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    sectionContainer: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    sectionText: {
        fontSize: 16,
    },
})