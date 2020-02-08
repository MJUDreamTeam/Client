import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import MyPosts from '../Components/Profile/MyPosts';
import TaggedPosts from '../Components/Profile/TaggedPosts';

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
      inactiveTintColor: '#fff',
      showLabel: false,
      showIcon: true,
    },
  },
);

const App = createAppContainer(PostsNavigator);

export default App;
