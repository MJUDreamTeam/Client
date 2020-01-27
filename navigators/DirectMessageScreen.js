import React from 'react';
import { Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../MainScreeen';

class DirectMessageScreen extends React.Component {
    //그냥 화면만 띄울 예정
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>DM Screen 출력예정, 혹은 이동예정</Text>
            <Button
            title = 'Go Home screen'
            onPress = {()=>this.props.navigation.navigate('Home')}/>
        </View>
        );
  }
}

const AppNavigator = createStackNavigator(
    {
    Home: Home,
    DirectMessage: DirectMessageScreen
    }
);

export default DirectMessageScreen;