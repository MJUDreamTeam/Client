import React from 'react';
import { Text, View } from 'react-native';
import {Icon} from 'native-base';
import {Ionicons} from 'react-native-vector-icons/Ionicons'

class SearchScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(
            <Icon name='search' style={{color:tintColor}}/>
        )
    }
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>검색 화면</Text>
        </View>
        );
  }
}

export default SearchScreen;