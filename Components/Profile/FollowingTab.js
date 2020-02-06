import React from 'react';
import {
  View,
  Text,
  Icon,
  Container,
  Content,
  Button,
  Thumbnail,
} from 'native-base';
import {ScrollView} from 'react-native';
import SearchBar from '../SearchBar';
import FollowItem from './FollowItem';

export default class FollowingTab extends React.Component {
  static navigationOptions = {
    title: '팔로잉',
  };
  render() {
    return (
      <View>
        <SearchBar />
        <ScrollView>
          {this.props.screenProps.followingData.map((contact, i) => {
            return <FollowItem src={contact.key} id={contact.id} key={i} />;
          })}
        </ScrollView>
      </View>
    );
  }
}
