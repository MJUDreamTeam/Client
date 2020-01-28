import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Icon, Container, Content} from 'native-base';
import CardComponent from '../Components/CardComponent';
import {Ionicons} from 'react-native-vector-icons/Ionicons'

class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(
            <Icon name='ios-home' style={{color:tintColor}}/>
        )
    }
    render() {
        return (
        <View style={style.view}>
            <Container style={style.container}>
                <Content>
                    <CardComponent />
                </Content>
            </Container>
        </View>
        );
  }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen;
