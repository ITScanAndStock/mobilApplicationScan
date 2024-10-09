import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, Image, View } from 'react-native';

const Camera = () => {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <CameraView
        barcodeScannerSettings={{ barcodeTypes: ['datamatrix', 'codabar', 'ean13', 'code128', 'qr', 'aztec'] }}
        style={{ flex: 1 }}
        facing={'back'}
        onBarcodeScanned={(data) => console.log(data.data, data.type)}
        autofocus="on"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('@/assets/images/overlay.png')} />
        </View>
      </CameraView>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
});
