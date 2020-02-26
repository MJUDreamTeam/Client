import React,{PureComponent} from 'react';
import {Image,ImageBackground,StyleSheet,View,TouchableOpacity,ToastAndroid, PermissionsAndroid, Platform} from 'react-native';
import {Text,Thumbnail} from 'native-base';
// 카메라 모듈 임포트
import CameraRoll from "@react-native-community/cameraroll";
import {RNCamera} from 'react-native-camera';
import DMCameraPreview from './DMCameraPreviewHook';
import {createStackNavigator} from '@react-navigation/stack';

class DMCamera extends React.Component {

    constructor(props){
        super(props);
        this.state={
            img:''
        }
    }

    // 그냥 화면만 띄우기
    render() {
        const {img} = this.state;
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
                >
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> 사진 찍어 찍어! </Text>
                    </TouchableOpacity>
                </RNCamera>
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <Image  source={{uri:img}} style={{  width: 200, height: 200}}/>
            </View>
          </View>
        );
    }

    takePicture = async function() {

      if (this.camera) {
        const options = { quality: 0.5 };
        const data = await this.camera.takePictureAsync(options).then(data => {
          ToastAndroid.show(data.uri, ToastAndroid.SHORT);
          this.setState({
              img:data.uri
          })
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
  });

const Stack = createStackNavigator();

function DMCameraStack() {
    return(
        <Stack.Navigator initialRouteName ="DMCamera">
            <Stack.Screen
                name = "DMCamera"
                component = {DMCamera}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name = "DMCameraPreview"
                component = {DMCameraPreview}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    );
}

export default DMCameraStack;