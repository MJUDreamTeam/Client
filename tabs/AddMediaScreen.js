import React from 'react';
import { Text, View } from 'react-native';
import {Icon} from 'native-base';
import {Ionicons} from 'react-native-vector-icons/Ionicons'

class AddMediaScreen extends React.Component {
    
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>사진이나 짧은 동영상을 업로딩하는 이벤트 발생</Text>
        </View>
        );
  }
}

export default AddMediaScreen;