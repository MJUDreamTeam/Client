import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Icon, Container, Content} from 'native-base';
import CardComponent from '../Components/CardComponent';
import { Text, ScrollView } from 'react-native';
import { Thumbnail} from 'native-base';

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
                <Content>
                    {/*스토리 헤더*/}
                    <View style={{ height: 100}}>
                        <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7}}>
                            <Text style={{ fontWeight: 'bold'}}>Stories</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="md-play" style={{ fontSize: 14}}></Icon>
                                <Text style={{fontWeight: 'bold'}}> Watch All</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3}}>
                            <ScrollView horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{
                                            alignItems: 'center',
                                            paddingStart: 5,
                                            paddingEnd: 5
                                        }}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri: 'https://avatars3.githubusercontent.com/u/49789734?s=80&v=4'}} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4'}} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri: 'https://avatars1.githubusercontent.com/u/48307960?s=64&v=4'}} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri: 'https://avatars1.githubusercontent.com/u/9072200?s=64&v=4'}} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri: 'https://avatars2.githubusercontent.com/u/18691542?s=64&v=4'}} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri: 'https://avatars2.githubusercontent.com/u/45916875?s=64&v=4'}} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4'}} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={{uri: 'https://avatars2.githubusercontent.com/u/55945829?s=64&v=4'}} />
                            </ScrollView>
                        </View>
                    </View>
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
