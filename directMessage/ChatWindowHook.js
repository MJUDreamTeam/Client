import React,{useState, useRef} from 'react';
import {KeyboardAvoidingView,StyleSheet,View,FlatList} from 'react-native';
import {Input,Item,Button,Icon,Text,Container,Header,Left,Right,Body,Title,Thumbnail} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// 카메라 컴포넌트 임포트
import DMCamera from './DMCameraHook';
import DMCameraPreview from './DMCameraPreviewHook';
// 말풍선 컴포넌트 임포트
import MessageBubble from './MessageBubble';
import MyMessageBubble from './MyMessageBubble';
// Input Text 임포트
import ChatInputText from './ChatInputText';
// Input Text Hook 임포트
import ChatInputTextHook from './ChatInputTextHook'


const myID = 'meohyun2';

const Messages = [
    {
        id:1,
        body: "안녕하세요",
        time: "4 minutes ago",
        senderID: "강영우",
    },
    {
        id:2,
        body: "방감습니다",
        time: "4 minutes ago",
        senderID: "장세영",
    },
    {
        id:3,
        body: "행복하세요",
        time: "4 minutes ago",
        senderID: "이민환",
    },
    {
        id:4,
        body: "이히리기우구추~",
        time: "4 minutes ago",
        senderID: "조지",
    }
]

// 객체 초기화 해주는 함수 newMessage
const newMessage = ({item}) => {
    if (item.senderID === myID) {
        return (
            <View style={styles.MessageBubbleMyID}>                    
                <MyMessageBubble
                    DialogText={item.body}
                />
            </View>
        );
    }
    return(
        <View style={styles.MessageBubbleOther}>
            <MessageBubble
                DialogText={item.body}
            />
        </View>
    );
}

function ChatWindowHook ({route,navigation}){

    //Hook 에서 ref 사용하기, useRef
    const flatRef = useRef(null);
    // Message 객체 useState해주기
    const [Message,setMessge]=useState(Messages);

    const _pressSetting = () => {
        alert('채팅 설정');
    }

    const _pressGoBack = () =>{
        navigation.goBack();
    }
    return (
        <Container>
            <Header style={styles.HeaderStyle}>
                <Left>
                    <Button transparent style={styles.CameraButton} onPress={_pressGoBack}>
                        <Icon name='arrowleft' type='AntDesign' style={{color:'black'}} />
                    </Button>     
                </Left>
                <Body style = {styles.BodyStyle}>
                    <Thumbnail style={{margin:10}} small source={{uri: 'https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/24/97555811.2.jpg'}} />
                    <Title style={{color:'black'}}>유저의 id 전송</Title>
                </Body>
                <Right style={styles.RightStyle} >
                    <Button transparent onPress={_pressSetting} >
                        <Icon name='ellipsis1' type='AntDesign' style={{color:'black'}} />
                    </Button>
                </Right>
            </Header>
            <FlatList
                data={Message}
                keyExtractor={(item)=>item.id}
                renderItem = {newMessage}
                ref = {flatRef}
                onContentSizeChange={()=>{flatRef.current.scrollToEnd()}}
            />
            <KeyboardAvoidingView>
                <ChatInputTextHook 
                    navigation={navigation}
                    onPress={
                        (text) => {
                            const newObject = {
                                id : Message[Message.length-1].id+1,
                                body : text,
                                time : 'now',
                                senderID : myID,
                            }
                            const newMessage = [...Message,newObject];
                            setMessge(newMessage);
                        }
                    }
                    onFocusInput={()=>{flatRef.current.scrollToEnd()}}
                    style={styles.ChatInputStyle}
                />
            </KeyboardAvoidingView>
        </Container>
    );
}

const styles = StyleSheet.create({
    RightStyle:{
        flex:1,
        alignItems:'flex-end',
    },
    BodyStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    HeaderStyle: {
        backgroundColor : 'white',
        justifyContent:'center',
        alignItems:'center'
    },
    ChatView: {
        justifyContent:'flex-end'
    },
    ChatViewStyle : {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end'
    }, 
    ChatInputStyle : {
        flex:1
    },
    MessageBubbleOther:{
        flex:1,
        alignItems:'flex-start'
    },
    MessageBubbleMyID:{
        flex:1,
        alignItems: 'flex-end',
    }
});

const Stack = createStackNavigator();

function ChatWindowNavigation() {
    return(
        <Stack.Navigator initialRouteName = "ChatWindow">
            <Stack.Screen 
                name = "ChatWindow" 
                component ={ChatWindowHook}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name = "DMCamera" 
                component ={DMCamera}
                options={{
                    headerShown:false
                }}/>
        </Stack.Navigator>
    );
}

export default ChatWindowNavigation;