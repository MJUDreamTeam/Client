import React from 'react';
import { Text, View } from 'react-native';
import {Icon} from 'native-base';
import {Ionicons} from 'react-native-vector-icons/Ionicons'

class ProfileScreen extends React.Component {
    
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>나의 프로필</Text>
        </View>
        );
  }
}

export default ProfileScreen;