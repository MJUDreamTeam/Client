import React,{useState,useRef} from 'react';
import {Alert,Modal,Image,ImageBackground,StyleSheet,View,TouchableOpacity,ToastAndroid, PermissionsAndroid, Platform} from 'react-native';
import {Text,Thumbnail, Button} from 'native-base';
// 카메라 모듈 임포트
import CameraRoll from "@react-native-community/cameraroll";
import {RNCamera} from 'react-native-camera';
import {createStackNavigator} from '@react-navigation/stack';

function DMCameraHook({navigation}){

    const [Img,setImg] = useState('');
    const [ModalVisible,setModalVisible] = useState(false);

    const takePicture = async function(camera) {
        if (camera) {
          const options = { quality: 0.5 };
          const data = await camera.takePictureAsync(options).then(data => {
            ToastAndroid.show(data.uri, ToastAndroid.SHORT);
            setImg(data.uri);
            setModalVisible(true);
            try {
              const granted = PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                  title: '사진 저장용 외부저장소 사용 권한',
                  message:
                  '외부 저장소를 사용하려 합니다.' +
                  '예 를 누르시면 저장됩니다.',
                  buttonNeutral: 'Ask Me Later',
                  buttonNegative: 'Cancel',
                  buttonPositive: 'OK',
                },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  console.log('You can use the camera');
                } else {
                  console.log('Write permission denied');
                }
              } catch (err) {
                console.warn(err);
              }
            });
        }
    };

    const _PressSendButton = () => {
        alert('메시지를 보냅니다.');
        CameraRoll.saveToCameraRoll(Img);
        // 여기다가 서버에 전송
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={ModalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <ImageBackground  source={{uri:Img}} style={styles.imageBackGroundStyle}>
                    <Button onPress ={_PressSendButton} style={styles.sendStyle}>
                        <Text>보내기</Text>
                    </Button>
                </ImageBackground>
            </Modal>
            <RNCamera
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
            >
                {({camera}) => {
                        return (
                        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                            <Text style={{ fontSize: 14 }}> SNAP </Text>
                            </TouchableOpacity>
                        </View>
                        );
                    }}
            </RNCamera>
        </View>
    );
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
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    },
    imageBackGroundStyle :{
        alignItems:'center',
        justifyContent:'flex-end',
        width: '100%', 
        height: '100%',
    },
    sendStyle: {
        margin: 20,
    }
  });

export default DMCameraHook;