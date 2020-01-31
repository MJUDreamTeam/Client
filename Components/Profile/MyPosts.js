import React from 'react';
import {View, Text, Icon} from 'native-base';
import PostsView from './PostsView';
export default class MyPosts extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name={'grid'} color={tintColor} size={25} />
    ),
  };
  render() {
    return (
      <View>
        <PostsView />
      </View>
    );
  }
}
