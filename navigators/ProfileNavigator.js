import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ProfileScreen from '../tabs/ProfileScreen';

import EditProfile from '../Components/Profile/EditProfile';

const ProfileNavigator = createStackNavigator(
  {
    Home: {screen: ProfileScreen},

    Second: {screen: EditProfile},
  },

  {initialRouteName: 'Home', headerMode: 'none'},
);

export default createAppContainer(ProfileNavigator);
