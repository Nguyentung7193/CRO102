import { StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../component/lap/lap1/Header'
import SectionView from '../../../component/lap/lap1/SectionView'
import Input from '../../../component/lap/lap1/Input'

const Lap1 = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    // Giả sử bạn có một hàm để kiểm tra email
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Email không hợp lệ');
        } else {
            setEmailError('');
        }
    };
    useEffect(() => {
        validateEmail(email);
    }, [email]);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header
                title="Trang chủ"
                onBackPress={() => console.log('Back pressed')}
                imageSource={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
            />
            <Header
                // title="Lap 1"
                onBackPress={() => console.log('Back pressed')}
                imageSource={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
            />
            <Header
                title="Lap 1"
                // onBackPress={() => console.log('Back pressed')}
                imageSource={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
            />
            <Header
                title="Lap 1"
                onBackPress={() => console.log('Back pressed')}
            // imageSource={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
            />
            <SectionView
                diaDiemLabel="Địa điểm"
                diaDiem="Hà Nội"
                thoiGianLabel="Thời gian"
                thoiGian="8:00 - 10:00"
                phuongTienLabel="Phương tiện"
                phuongTien="Xe bus"
                thoiGianDiChuyenLabel="Thời gian di chuyển"
                thoiGianDiChuyen="30 phút"
                hinhAnhLabel="Hình ảnh"
                hinhAnh={{uri: 'https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg'}}
            />
            <SectionView
                diaDiemLabel="Địa điểm"
                diaDiem="Hà Nội"
                thoiGianLabel="Thời gian"
                thoiGian="8:00 - 10:00"
                phuongTienLabel="Phương tiện"
                phuongTien="Xe bus"
                thoiGianDiChuyenLabel="Thời gian di chuyển"
                thoiGianDiChuyen="30 phút"
            // hinhAnhLabel="Hình ảnh"
            // hinhAnh={require('../../../assets/raiden.webp')}
            />
            <Input
                title="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="Nhập email"
                error={emailError}
            />
        </ScrollView>
    )
}

export default Lap1

const styles = StyleSheet.create({
    container: {
        paddingBottom: 24,
        marginTop: 24,
    }
})