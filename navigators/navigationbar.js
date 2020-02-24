import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'native-base';

// tabs폴더에 있는 tab들을 임포트
import AddMediaNavigator from "./AddMediaNavigator";
import HomeScreen from '../tabs/HomeScreen';
import LikesScreen from '../tabs/LikesScreen';
import ProfileScreen from '../tabs/ProfileScreen';
import SearchScreen from '../tabs/SearchScreen';

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon name='ios-home' style={{color: tintColor}}/>
                ),
            })
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon name='ios-search' style={{color: tintColor}}/>
                )
            })
        },
        AddMedia: {
            screen: AddMediaNavigator,
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon name='ios-add-circle-outline' style={{color: tintColor}}/>
                ),
                tabBarVisible: false
            })
        },
        Likes: {
            screen: LikesScreen,
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon name='heart' style={{color: tintColor}}/>
                )
            })
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon name='contact' style={{color: tintColor}}/>
                )
            })
        }
    }
)

const BottomContainer = createAppContainer(TabNavigator);

export default BottomContainer;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
