import React from 'react';
import { Button, View, Text } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CameraScreen from "./CameraScreen";
import LibraryScreen from '../Components/AddMedia/LibraryScreen';
import VideoScreen from '../Components/AddMedia/VideoScreen';

const AddMediaNavigator = createBottomTabNavigator({
    Library: { screen: LibraryScreen },
    Camera: { screen: CameraScreen },
    Video: { screen: VideoScreen }
})



export default createAppContainer(AddMediaNavigator);
