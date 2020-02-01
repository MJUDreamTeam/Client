import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import MyPosts from './MyPosts';
import TaggedPosts from './TaggedPosts';

const PostsNavigator = createMaterialTopTabNavigator(
  {
    MyPosts: {screen: MyPosts},
    TaggedPosts: {screen: TaggedPosts},
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: 'white',
          },
        }),
      },
      activeTintColor: '#0b72ff',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true,
    },
  },
);

const App = createAppContainer(PostsNavigator);

export default App;
