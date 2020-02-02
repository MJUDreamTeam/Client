import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Container, Content} from 'native-base';
import CardList from '../Components/Card/CardList';

class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(
            <Icon name='ios-home' style={{color:tintColor}}/>
        )
        ,headerLeft:()=>
            <Button icon transparent onPress={()=>{alert('카메라 실행')}}>
                <Icon name='camera' style={{paddingLeft:10}}/>
            </Button>
        ,title: 'Instagram'
        ,headerRight:()=>
            <Button icon transparent onPress={()=>{alert('DM 메시지 화면')}}>
                <Icon name='send' style={{paddingRight:10}}/>
            </Button>
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
