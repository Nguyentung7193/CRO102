import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, View } from 'react-native';
import {
  launchCamera,
  CameraOptions,
  launchImageLibrary,
  Asset,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import { PermissionsAndroid, Platform } from 'react-native';

const CameraComponent = () => {
  const [photoUri, setPhotoUri] = React.useState<string | undefined>();
  const [image, setImage] = useState<Asset | null>(null);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Cấp quyền sử dụng Camera',
            message: 'Ứng dụng cần quyền truy cập camera để chụp ảnh',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const handleTakePhoto = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert('Không có quyền', 'Bạn chưa cấp quyền sử dụng camera');
      return;
    }

    const options: CameraOptions = {
      mediaType: 'photo',
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('Người dùng đã hủy');
      } else if (response.errorCode) {
        console.log('Lỗi camera: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setPhotoUri(response.assets[0].uri);
      }
    });
  };

  const handleChooseFromLibrary = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert('Image picker error', response.errorMessage || '');
      } else if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="📸 Chụp ảnh" onPress={handleTakePhoto} />
      <View style={styles.spacing} />
      <Button
        title="🖼️ Chọn ảnh từ thư viện"
        onPress={handleChooseFromLibrary}
      />
      {(photoUri || image?.uri) && (
        <Image
          source={{ uri: photoUri || image?.uri }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacing: {
    height: 16,
  },
  image: {
    marginTop: 24,
    width: 300,
    height: 300,
    borderRadius: 12,
  },
});

export default CameraComponent;
