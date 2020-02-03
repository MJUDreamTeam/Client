import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {Icon,Button} from 'native-base';

// 상단 네비게이션 stack 화면을 위한 import
import CameraScreen from './CameraScreen';
import DirectMessageScreen from './DirectMessageScreen';
// tabs폴더에 있는 tab들을 임포트
import AddMediaScreen from '../tabs/AddMediaScreen';
import HomeScreen from '../tabs/HomeScreen';
import LikesScreen from '../tabs/LikesScreen';
import ProfileScreen from '../tabs/ProfileScreen';
import SearchScreen from '../tabs/SearchScreen';

const TabNavigator = createBottomTabNavigator(
  {
      Home: {
          screen : HomeScreen,
          navigationOptions: ({navigation}) => ({
              tabBarIcon:({tintColor})=>(
                  <Icon name='ios-home' style={{color:tintColor}}/>
              ),
          })
      },
      Search:{
          screen : SearchScreen,
          navigationOptions: ({navigation}) => ({
              tabBarIcon:({tintColor})=>(
                  <Icon name='ios-search' style={{color:tintColor}}/>
              )
          })
      },
      AddMedia : {
          screen : AddMediaScreen,
          navigationOptions: ({navigation}) => ({
              tabBarIcon:({tintColor})=>(
                  <Icon name='ios-add-circle-outline' style={{color:tintColor}}/>
              )
          })
      },
      Likes : {
          screen : LikesScreen,
          navigationOptions: ({navigation}) => ({
              tabBarIcon:({tintColor})=>(
                  <Icon name='heart' style={{color:tintColor}}/>
              )
          })
      },
      Profile : {
          screen : ProfileScreen,
          navigationOptions: ({navigation}) => ({
              tabBarIcon:({tintColor})=>(
                  <Icon name='contact' style={{color:tintColor}}/>
              )
          })
      }
  },
);

const BottomContainer = createAppContainer(TabNavigator);

export default BottomContainer;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
