import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import FollowerTab from '../Components/Profile/FollowerTab';
import FollowingTab from '../Components/Profile/FollowingTab';

const FollowNavigator = createMaterialTopTabNavigator(
  {
    FollowerTab: {screen: FollowerTab},
    FollowingTab: {screen: FollowingTab},
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
      showLabel: true,
      showIcon: false,
    },
  },
);

const App = createAppContainer(FollowNavigator);

export default App;
