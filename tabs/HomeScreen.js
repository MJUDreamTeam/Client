import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Container, Content,Button} from 'native-base';
import CardList from '../Components/Card/CardList';
import {createStackNavigator} from 'react-navigation-stack';
import DirectMessageScreen from '../directMessage/DirectMessageScreen';
import CameraScreen from '../navigators/CameraScreen';

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

const HomeStack = createStackNavigator(
    {
        Home : {
            screen : HomeScreen,
            navigationOptions:({navigation}) => ({
                headerLeft:()=>
                <Button icon transparent onPress={()=> navigation.navigate('Camera')}>
                    <Icon name='camera' style={{paddingLeft:10}}/>
                </Button>
                ,title: 'Instagram'
                ,headerRight:()=>
                    <Button icon transparent onPress={() => navigation.navigate('DirectMessage')}>
                        <Icon name='send' style={{paddingRight:10}}/>
                    </Button>
            })
        },

        DirectMessage : {
            screen : DirectMessageScreen,
        },
        Camera:{
            screen: CameraScreen,
            navigationOptions:({navigation}) => ({
                headerShown:false,


            }),
        }
    }
);

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
      navigation.state.routes.map(route => {
        if (route.routeName === "Camera") {
          tabBarVisible = false;
        } else {
          tabBarVisible = true;
        }
      });
    }

    return {
      tabBarVisible
    };
};

export default HomeStack;
