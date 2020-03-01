import React, {useState} from 'react';
import {Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CameraScreen from "./CameraScreen";
import VideoScreen from '../Components/AddMedia/VideoScreen';
import LibraryScreen from '../Components/AddMedia/LibraryScreen'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import PostScreen from "../Components/AddMedia/PostScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const LibraryStack = createStackNavigator();
const CameraStack = createStackNavigator();
const VideoStack = createStackNavigator();

// 라이브러리 스크린 스택처리
function LibraryStackScreen({navigation}) {
    return (
        <LibraryStack.Navigator>
            <LibraryStack.Screen
                name={"Library"}
                component={LibraryScreen}
            />
        </LibraryStack.Navigator>
    )
}

// 카메라 스크린 스택처리
function CameraStackScreen() {
    return (
        <CameraStack.Navigator>
            <CameraStack.Screen
                name={"Camera"}
                component={CameraScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: '사진'
                }}
            />
        </CameraStack.Navigator>
    )
}

// 비디오 스크린 스택처리
function VideoStackScreen() {
    return (
        <VideoStack.Navigator>
            <VideoStack.Screen
                name={"Video"}
                component={VideoScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: '비디오'
                }}
            />
        </VideoStack.Navigator>
    )
}

// 세개 스크린 탭 네비게이터 처리
function AddMediaNavigator() {
    return (
        <Tab.Navigator initialRouteName='LibraryScreen' screenOptions={{headerTitleAlign: 'center'}} backBehavior='none'>
            <Tab.Screen name="LibraryScreen" component={LibraryStackScreen} options={{tabBarLabel: '갤러리'}}/>
            <Tab.Screen name="CameraScreen" component={CameraStackScreen} options={{tabBarLabel: '사진'}}/>
            <Tab.Screen name="VideoScreen" component={VideoStackScreen} options={{tabBarLabel: '비디오'}}/>
        </Tab.Navigator>
    )
}

// 새 게시물 스크린 스택 추가
function LibraryNavigator({navigation}) {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
                <Stack.Screen
                    name='AddMediaNavigator'
                    component={AddMediaNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Post"
                    component={PostScreen}
                    options={{
                        headerTitle: '새 게시물',
                        headerTitleAlign: 'center',
                        headerRight: () => (<Button title="공유" onPress={() => navigation.goBack()}/>)
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LibraryNavigator;
