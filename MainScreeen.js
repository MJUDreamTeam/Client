import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {navigation} from 'react-navigation';
import {Icon, Button, Root} from 'native-base';

// 하단 탭 네비게이션 Component 를 import
import TabNavigator from './navigators/navigationbar';

class MainScreen extends React.Component {
  static navigationOptions = {};
  render() {
    return (
      <Root>
        <TabNavigator />
      </Root>
    );
  }
}

// const AppNavigator = createStackNavigator(
//     {
//         Home: MainScreen,
//         Camera: CameraScreen,
//         DirectMessage : DirectMessageScreen
//     },
//     {
//         headerMode: 'none'
//     }
// );

// const StackContainer = createAppContainer(AppNavigator);

export default MainScreen;
