import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {View} from "react-native";
export default class AddMediaHeader extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={alert('뒤로가기')}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Button transparent onPress={alert('다음')}>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        );
    }
}
