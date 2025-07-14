import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type SectionViewProps = {
    diaDiemLabel?: string;
    diaDiem?: string;
    thoiGianLabel?: string;
    thoiGian?: string;
    phuongTienLabel?: string;
    phuongTien?: string;
    thoiGianDiChuyenLabel?: string;
    thoiGianDiChuyen?: string;
    hinhAnhLabel?: string;
    hinhAnh?: any;
};

const SectionView: React.FC<SectionViewProps> = ({
    diaDiemLabel,
    diaDiem,
    thoiGianLabel,
    thoiGian,
    phuongTienLabel,
    phuongTien,
    thoiGianDiChuyenLabel,
    thoiGianDiChuyen,
    hinhAnhLabel,
    hinhAnh,
}) => {
    return (
        <View style={styles.container}>
            {diaDiemLabel && <Text style={styles.label}>{diaDiemLabel}</Text>}
            {diaDiem && <Text style={styles.value}>{diaDiem}</Text>}

            {thoiGianLabel && <Text style={styles.label}>{thoiGianLabel}</Text>}
            {thoiGian && <Text style={styles.value}>{thoiGian}</Text>}

            {phuongTienLabel && <Text style={styles.label}>{phuongTienLabel}</Text>}
            {phuongTien && <Text style={styles.value}>{phuongTien}</Text>}

            {thoiGianDiChuyenLabel && <Text style={styles.label}>{thoiGianDiChuyenLabel}</Text>}
            {thoiGianDiChuyen && <Text style={styles.value}>{thoiGianDiChuyen}</Text>}

            {hinhAnhLabel && <Text style={styles.label}>{hinhAnhLabel}</Text>}
            {hinhAnh && <Image source={hinhAnh} style={styles.image} />}
        </View>
    );
};

export default SectionView;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 16,           // Bo tròn góc nhiều hơn
        padding: 20,                // Padding lớn hơn
        marginVertical: 12,
        borderWidth: 1,             // Thêm viền
        borderColor: '#e0e0e0',     // Màu viền nhẹ
        shadowColor: '#000',
        shadowOpacity: 0.15,        // Đậm hơn một chút
        shadowRadius: 8,            // Bóng rộng hơn
        shadowOffset: { width: 0, height: 4 }, // Đổ bóng xuống dưới
        elevation: 4,               // Bóng cho Android
        marginHorizontal: 16, // Căn lề ngang
    },
    label: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 8,
        color: '#333',
    },
    value: {
        fontSize: 16,
        color: '#555',
        marginBottom: 4,
    },
    image: {
        width: '100%',      // Chiếm toàn bộ chiều ngang
        height: undefined,  // Để auto chiều dọc
        aspectRatio: 3/2,   // Hoặc bạn có thể điều chỉnh tỉ lệ này (VD: 3/2, 16/9...)
        marginTop: 8,
        borderRadius: 8,
        resizeMode: 'cover',
    },
});