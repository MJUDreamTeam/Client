import React from 'react';
import { Text, View } from 'react-native';
import {Icon} from 'native-base';
import {Ionicons} from 'react-native-vector-icons/Ionicons'

class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(
            <Icon name='ios-home' style={{color:tintColor}}/>
        )
    }
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>기본 타임라인 구성</Text>
        </View>
        );
  }
}

export default HomeScreen;