import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ProfileScreen from '../tabs/ProfileScreen';

import EditProfile from '../Components/Profile/EditProfile';
import FollowScreen from '../Components/Profile/FollowScreen';
import StoryScreen from '../Components/Story/StoryScreen';

const ProfileNavigator = createStackNavigator(
  {
    Home: {screen: ProfileScreen},

    Edit: {screen: EditProfile},

    Follow: {screen: FollowScreen},

    Story: {screen: StoryScreen},
  },

  {initialRouteName: 'Home', headerMode: 'none'},
);

export default createAppContainer(ProfileNavigator);
