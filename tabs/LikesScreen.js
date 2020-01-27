import React from 'react';
import { Text, View } from 'react-native';
import {Icon} from 'native-base';
import {Ionicons} from 'react-native-vector-icons/Ionicons'

class LikesScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(
            <Icon name='heart' style={{color:tintColor}}/>
        )
    }
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>나의 인스타 활동 로그 출력</Text>
        </View>
        );
  }
}

export default LikesScreen;