import React,{PureComponent} from 'react';
import { Text, View, StatusBar,StyleSheet,TouchableOpacity, ToastAndroid, PermissionsAndroid, Platform } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll"
import {RNCamera} from 'react-native-camera'

class CameraScreen extends PureComponent {
    // 그냥 화면만 띄우기
    render() {
        return (
            <View style={styles.container}>
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.off}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes);
              }}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> 사진 찍어 찍어! </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
  }

    takePicture = async function() {
      if (this.camera) {
        const options = { quality: 0.5 };
        const data = await this.camera.takePictureAsync(options).then(data => {
          ToastAndroid.show(data.uri, ToastAndroid.SHORT);
          CameraRoll.saveToCameraRoll(data.uri);
          console.log(data);
        });
      }
    };
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: 'lightblue',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });

export default CameraScreen;