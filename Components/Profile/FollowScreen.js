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
        <Header style={{backgroundColor:'white'}}>
          <Left style={{flex: 2}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name={'ios-arrow-back'} size={20} />
            </TouchableOpacity>
          </Left>
          <Body style={{flex: 2}}>
            <Title style={{color:'black'}}>User Id</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <FollowNavigator
            screenProps={{
              followerData: this.props.navigation.getParam(
                'followerData',
                'ccc',
              ),
              followingData: this.props.navigation.getParam(
                'followingData',
                'www',
              ),
            }}
          />
        </Content>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({

// });
