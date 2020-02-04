import React from 'react';
import { Text, View } from 'react-native';
import {Container} from 'native-base'

class LibraryScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>라이브러리 스크린</Text>
            </View>
        );
    }
}

export default LibraryScreen;
