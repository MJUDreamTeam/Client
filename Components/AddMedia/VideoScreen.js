import React from 'react';
import { Text, View } from 'react-native';
import {Container} from 'native-base';

class VideoScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>비디오 스크린</Text>
            </View>
        );
    }
}

export default VideoScreen;
