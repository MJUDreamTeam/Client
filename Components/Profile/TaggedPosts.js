import React from 'react';
import {View, Icon} from 'native-base';
import PostsView from './PostsView';

export default class TaggedPosts extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name={'person'} color={tintColor} size={25} />
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
