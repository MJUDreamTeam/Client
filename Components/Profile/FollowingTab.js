import React from 'react';
import {Icon, Container, Content, Header, Item, Input} from 'native-base';
import {ScrollView} from 'react-native';
// import SearchBar from '../SearchBar';
import FollowItem from './FollowItem';

export default class FollowingTab extends React.Component {
  static navigationOptions = {
    title: '팔로잉',
  };
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{backgroundColor: 'white'}}>
          <Item style={{backgroundColor: '#f5f5f5'}}>
            <Icon name="ios-search" />
            <Input placeholder="검색" />
          </Item>
        </Header>
        <Content>
          <ScrollView>
            {this.props.screenProps.followingData.map((contact, i) => {
              return (
                <FollowItem
                  src={contact.profileImage}
                  id={contact.id}
                  key={i}
                />
              );
            })}
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
