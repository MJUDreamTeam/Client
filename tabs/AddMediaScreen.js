import React from 'react';
import { Text, View } from 'react-native';
import {Container} from 'native-base';
import {Ionicons} from 'react-native-vector-icons/Ionicons'
import AddMediaNavigator from "../navigators/AddMediaNavigator";

class AddMediaScreen extends React.Component {

    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <AddMediaNavigator/>

        </View>
        );
  }
}

export default AddMediaScreen;
