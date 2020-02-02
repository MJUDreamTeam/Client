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

const data = [
  {key: 'https://rdd9223.github.io/assets/images/profile.jpg', id: '1'},
  {key: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4', id: '2'},
  {key: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4', id: '3'},
  {key: 'https://rdd9223.github.io/assets/images/profile.jpg', id: '4'},
  {key: 'https://avatars2.githubusercontent.com/u/55945829?s=64&v=4', id: '5'},
  {key: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4', id: '7'},
  {key: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4', id: '8'},
];

export default class FollowingTab extends React.Component {
  static navigationOptions = {
    title: '팔로잉',
  };
  render() {
    return (
      <View>
        <SearchBar />
        <ScrollView>
          {data.map((contact, i) => {
            return <FollowItem src={contact.key} id={contact.id} key={i} />;
          })}
        </ScrollView>
      </View>
    );
  }
}
