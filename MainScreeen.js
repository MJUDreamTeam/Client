import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Icon,Button} from 'native-base';

// 상단 네비게이션 stack 화면을 위한 import
import CameraScreen from './navigators/CameraScreen';
import DirectMessageScreen from './navigators/DirectMessageScreen';

// 하단 탭 네비게이션 Component 를 import
import TabNavigator from './navigators/navigationbar';

class MainScreen extends React.Component{
    static navigationOptions = {
        headerLeft:()=> 
            <Button icon transparent 
            onPress={()=>{alert('카메라 실행')}}>
                <Icon name='camera' style={{paddingLeft:10}}/>
            </Button>
        ,title: 'Instagram'
        ,headerRight:()=> 
            <Button icon transparent 
            onPress={()=>{alert('DM 메시지 화면')}}>
                <Icon name='send' style={{paddingRight:10}}/>
            </Button>
    }
    render(){
        return(
            <TabNavigator/>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: MainScreen,
        Camera: CameraScreen,
        DirectMessage : DirectMessageScreen
    },
    {
        initialRouteName:'Home',
    }
);

const StackContainer = createAppContainer(AppNavigator);

export default StackContainer;
