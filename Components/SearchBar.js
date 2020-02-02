import React, {Component} from 'react';
import {
  Container,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text,
  View,
} from 'native-base';
export default class SearchBarExample extends Component {
  render() {
    return (
      <Item
        rounded
        style={{
          alignItems: 'center',
          flex:1,
          flexDirection:'row',
          width: '95%',
          marginLeft: '3%',
          marginTop: '2%',
          backgroundColor: 'whitesmoke',
        }}>
        <Icon name="ios-search" />
        <Input placeholder="검색" placeholderTextColor="black" />
      </Item>
    );
  }
}
