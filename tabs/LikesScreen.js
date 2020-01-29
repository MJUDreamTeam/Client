import React from 'react';
import {View, StyleSheet } from 'react-native';
import {Container, Content,Icon} from 'native-base';
import {Ionicons} from 'react-native-vector-icons/Ionicons'
import { Thumbnail} from 'native-base';
import ActivityList from '../Components/Activity/ActivityList';

class LikesScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(
            <Icon name='heart' style={{color:tintColor}}/>
        )
    }
    render() {
        return (
            <Container style={style.container}>
                <ActivityList />
            </Container>
        );
  }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center'
    }
})
export default LikesScreen;