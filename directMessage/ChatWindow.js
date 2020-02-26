import React from 'react';
import {KeyboardAvoidingView,StyleSheet,View,FlatList} from 'react-native';
import {Input,Item,Button,Icon,Text,Container,Header,Left,Right,Body,Title,Thumbnail} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// 카메라 스크린 임포트
import DMCamera from './DMCamera';
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

class ChatWindow extends React.Component{

    //state엔 일단 대화 내역만 담는다.
    constructor(props){
        super(props);
        this.state={
            messageObject:Messages
        };
    }

    //대화내용을 state에 저장하여 전달하는 메서드가 필요

    //상단 헤더바 버튼 Listner
    _OnPressArrowButton=()=>{
        this.props.navigation.goBack();
    }

    _OnPressSettingButton=()=>{
        // Setting 하는 Component 로 navigate 시킴
        alert('navigate setting');
    }

    //Button Listener 각각 하나씩, Camera Button, Send Button
    _OnPressSendButton=(text)=>{
        this.setMessage(text);
    }

    //FlatList render 해줄 함수
    _renderItem = ({item}) => {
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

    //State에 Message를 전달하는 함수
    setMessage = (message) => {
        this.setState((prevState) => {
            // 기존의 스테이트에 새로운 메시지 객체 추가
            const newObject = {
                id : this.state.messageObject[this.state.messageObject.length-1].id+1,
                body : message,
                time : 'now',
                senderID : myID,
            }
            const newMessage = [...prevState.messageObject,newObject];
            return { messageObject : newMessage };
        });
    }

    render(){
        const name = this.props.navigation.params.item.name;
        return (
            <Container>
                <Header style={styles.HeaderStyle}>
                    <Left>
                        <Button transparent style={styles.CameraButton} onPress={this._OnPressArrowButton}>
                            <Icon name='arrowleft' type='AntDesign' style={{color:'black'}} />
                        </Button>     
                    </Left>
                    <Body style = {styles.BodyStyle}>
                        <Thumbnail style={{margin:10}} small source={{uri: 'https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/24/97555811.2.jpg'}} />
                        <Title style={{color:'black'}}>{JSON.stringify(name).replace(/\"/gi,'')}</Title>
                    </Body>
                    <Right style={styles.RightStyle} >
                        <Button transparent onPress={this._OnPressSettingButton} >
                            <Icon name='ellipsis1' type='AntDesign' style={{color:'black'}} />
                        </Button>
                    </Right>
                </Header>
                <FlatList
                    data={this.state.messageObject}
                    keyExtractor={(item)=>item.id}
                    renderItem ={this._renderItem}
                    ref = "flatList"
                    onContentSizeChange={()=> this.refs.flatList.scrollToEnd()}
                />
                <KeyboardAvoidingView>
                    <ChatInputTextHook onPressSendInChat={this._OnPressSendButton} style={styles.ChatInputStyle}/>     
                </KeyboardAvoidingView>
            </Container>
        );
    }
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
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "ChatWindow">
                <Stack.Screen name = "ChatWindow" component ={ChatWindow}/>
                <Stack.Screen name = "DMCamera" component ={DMCamera}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ChatWindowNavigation;