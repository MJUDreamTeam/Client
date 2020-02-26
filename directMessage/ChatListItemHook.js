import React,{useState} from 'react';
import {StyleSheet,View,TouchableOpacity} from 'react-native';
import {Text,Thumbnail} from 'native-base';
import {useNavigation} from '@react-navigation/native';

//채팅방 목록의 하나의 목록 아이템을 나타내는 Component
//DB와 연동하여 현재 유지중인 모든 채팅방을 로딩할때의 하나의 컴포넌트

function ChatListItemHook(props){

    const navigation=useNavigation();

    const _onPress = () => {
        navigation.navigate('ChatWindow');
    }

    return(
        <TouchableOpacity style= {style.container} onPress={_onPress} >
            <View style= {style.thumbnail} >
                <Thumbnail source={{uri: 'https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/24/97555811.2.jpg'}} />
            </View>
            <View style= {style.content}>
                <Text>
                    {props.name}
                </Text>
                <Text style = {{color: '#595959', fontSize: 12}}>
                    {props.lastChat}
                </Text>
                <Text style = {{color: '#595959', fontSize: 8}}>
                    {props.time}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
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

export default ChatListItemHook;