import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Container, Content} from 'native-base';
import CardComponent from '../Components/CardComponent';
import CardList from '../Components/CardList';
import StoryHeaderList from '../Components/Story/StoryHeaderList';
import { Text, ScrollView } from 'react-native';
import { Thumbnail} from 'native-base';

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
                <CardList />
            </Container>
        </View>
        );
    }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
