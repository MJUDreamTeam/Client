import React from 'react';
import {View,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text,Thumbnail } from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const channels=[
    {
        id:1,
        lastChat:'잘가~', // 실제론 DB에서 가져오는 데이터
        time:'2020.02.09',
        name:'강영우'
    },
    {
        id:2,
        lastChat:'으헤헤헤헤헤헿', // 실제론 DB에서 가져오는 데이터
        time:'2020.02.07',
        name:'김대현'
    },
    {
        id:3,
        lastChat:'흐흐흐헤헤헤', // 실제론 DB에서 가져오는 데이터
        time:'2020.02.04',
        name:'이민환'
    },
    {
        id:4    ,
        lastChat:'쓰바씨바!', // 실제론 DB에서 가져오는 데이터
        time:'2020.02.01',
        name:'장세영'
    },
    {
        id:5,
        lastChat:'잘가~', // 실제론 DB에서 가져오는 데이터
        time:'2020.02.09',
        name:'김대현'
    },
    {
        id:6,
        lastChat:'으헤헤헤헤헤헿', // 실제론 DB에서 가져오는 데이터
        time:'2020.02.07',
        name:'김짱짱'
    },
    {
        id:7,
        lastChat:'흐흐흐헤헤헤', // 실제론 DB에서 가져오는 데이터
        time:'2020.02.04',
        name:'최돌돌'
    },
    {
        id:8,
        lastChat:'쓰바씨바!', // 실제론 DB에서 가져오는 데이터
        time:'2020.02.01',
        name:'이하하'
    },
    {
        id:9,
        lastChat:'잘가~', // 실제론 DB에서 가져오는 데이터
        time:'2020.02.09',
        name:'히히히하하하힣'
    },
    {
        id:10,
        lastChat:'으헤헤헤헤헤헿', // 실제론 DB에서 가져오는 데이터
        time:'2020.02.07',
        name:'이히리기우구추'
    },
    {
        id:11,
        lastChat:'흐흐흐헤헤헤', // 실제론 DB에서 가져오는 데이터
        time:'2020.02.04',
        name:'최청청'
    },
    {
        id:12,
        lastChat:'쓰바씨바!', // 실제론 DB에서 가져오는 데이터
        time:'2020.02.01',
        name:'기보보배'
    },
];

//채팅창 임포트
import ChatWindow from './ChatWindowHook';
import ChatListItem from './ChatListItemHook';
import ChatListItemHook from './ChatListItemHook';

// DM 메시지 기본화면
class DirectMessageScreen extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            chatRooms : [],
            page: 1 // 무한 스크롤 구현 이용
        };
    }

    // 채팅방 리스트 아이템을 렌더
    _renderChatListItem = ({item}) => (
        <ChatListItem {...item} /> // item props 전부 전송
    );

    // 무한 스크롤 구동시 필요한 함수 (onReachedEnd에 사용할 예정 현재는 X)
    _getChatList = () => {
        this.setState({
            chatRooms: this.state.data.concat(channels),
            page:this.state.page+1
        })
    }

    render(){
        return(
            <Container>
                <Header searchBar rounded style={styles.SearchBarContainer} >
                    <Item>
                        <Icon name="ios-search"/>
                        <Input placeholder="Search"/>
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Container>
                    <Text style={{marginLeft: 15,fontSize:30}}>메세지</Text>
                    <FlatList
                        data = {channels}
                        renderItem={this._renderChatListItem}
                        keyExtractor={(item)=>item.id}
                    />
                </Container>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    SearchBarContainer:{
        marginTop: 0,
        backgroundColor:'white'
    },
    container:{
        backgroundColor:'white',
        flexDirection: 'row',
        height: 80, padding:10,
    },
    thumbnail:{
        backgroundColor:'white',
        flex: 1,
        padding: 4,
    },
    content: {
        backgroundColor:'white',
        flex: 4,
        padding: 2,
    },
});

const Stack = createStackNavigator();

function DMNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName = "DirectMessage"
                screenOptions={{
                    headerStyle: {
                      backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
            >
                <Stack.Screen 
                    name = "DirectMessage" 
                    component ={DirectMessageScreen}
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen 
                    name = "ChatWindow" 
                    component ={ChatWindow}
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen 
                    name = "ChatList" 
                    component ={ChatListItemHook}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default DMNavigation;