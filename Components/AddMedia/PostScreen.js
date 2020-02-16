import React, { Component } from 'react';
import { Text, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {View} from "react-native";

export default class PostScreen extends Component {
    render() {
        return (
            <View style={{justifyContent: 'center',flex: 1}}>
                <Text> 새 게시물 </Text>
            </View>
        );
    }
}
