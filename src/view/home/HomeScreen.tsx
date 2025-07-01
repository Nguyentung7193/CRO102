import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/header/Header'
import SectionView from '../../component/secrion/SectionView'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header
                title={'This is Home'}
                backgroundColor='white'
                textColor='black'
                onPressLeft={() => Alert.alert('Back pressed')}
                onPressRight={() => Alert.alert('Menu pressed')}
                iconleft={require('../../assets/icons8-back.png')}
                iconright={require('../../assets/icons8-hamburger.png')}
            />
            <SectionView
                title='Section Title'
                tenSuKien='Event Name'
                NgayDienRa='Date of Event'
                diaDiem='Location'
                thoiGian='Time'
                hinhAnh={require('../../assets/raiden.webp')}
                backgroundColor='lightgray'
                textColor='black'
            />
            <SectionView
                title='Another Section'
                tenSuKien='Another Event'
                NgayDienRa='Another Date'
                diaDiem='Another Location'
                thoiGian='Another Time'
                hinhAnh={require('../../assets/raiden.webp')}
                backgroundColor='lightblue'
                textColor='black'
            />
            <SectionView
                title='Third Section'
                tenSuKien='Third Event'
                NgayDienRa='Third Date'
                diaDiem='Third Location'
                // thoiGian='Third Time'
                // hinhAnh={require('../../assets/raiden.webp')}
                backgroundColor='lightgreen'
                textColor='black'
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    }
})