import React from 'react';
import {StyleSheet,View,TouchableOpacity} from 'react-native';
import {Text,Thumbnail} from 'native-base';

//채팅방 목록의 하나의 목록 아이템을 나타내는 Component
//DB와 연동하여 현재 유지중인 모든 채팅방을 로딩할때의 하나의 컴포넌트

class ChatListItem extends React.Component{

    // 채팅창을 누르면 네비게이트 되는 이벤트 처리
    _onPress = () => {
        this.props.navigation.navigate('ChatWindow',{itemId:1,otherParam:this.props.name});
    }

    render(){
        return(
            <TouchableOpacity style= {style.container} onPress={this._onPress} >
                <View style= {style.thumbnail} >
                    <Thumbnail source={{uri: 'https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/24/97555811.2.jpg'}} />
                </View>
                <View style= {style.content}>
                    <Text>
                        {this.props.name}
                    </Text>
                    <Text style = {{color: '#595959', fontSize: 12}}>
                        {this.props.lastChat}
                    </Text>
                    <Text style = {{color: '#595959', fontSize: 8}}>
                        {this.props.time}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
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

export default ChatListItem;