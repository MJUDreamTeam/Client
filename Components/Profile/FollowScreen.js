import React from 'react';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Text,
} from 'native-base';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FollowNavigator from '../../navigators/FollowNavigator';

export default class FollowScreen extends React.Component {
  render() {
    return (
      <Container style={{flex: 1, backgroundColor: 'white'}}>
        <Header>
          <Left style={{flex: 2}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name={'ios-arrow-back'} size={20} />
            </TouchableOpacity>
          </Left>
          <Body style={{flex: 2}}>
            <Title>User Id</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <FollowNavigator />
        </Content>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({

// });
