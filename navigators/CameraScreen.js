import React from 'react';
import { Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class CameraScreen extends React.Component {
    // 그냥 화면만 띄우기
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>카메라 실행 예정</Text>
            <Button
            title = 'Go Home screen'
            onPress = {alert('흥항훙')}/>
        </View>
        );
  }
}

export default CameraScreen;