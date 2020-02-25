import React from 'react';
import {KeyboardAvoidingView,TextInput,StyleSheet,View,FlatList} from 'react-native';
import {Input,Item,Button,Icon,Text,Container,Header,Left,Right,Body,Title, Thumbnail} from 'native-base';


class ChatInputText extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            text:''
        }
    }

    _OnChangeInput = (inputtext)=> {
        this.setState({
            text:inputtext
        });
    }

    _OnPressSendButton = () => {
        this.props.onPress(this.state.text);
        this._input._root.clear();
        this.setState({text:''});
    }

    _OnPressCameraButton = () => {
        alert('카메라 네비게이트');
    }

    render(){
        return (
            <View style = {styles.ViewStyle}>
                <Item regular style = {styles.ViewStyle}>
                    <Button onPress={this._OnPressCameraButton} style={styles.CameraButton}>
                        <Icon name='ios-camera' style ={styles.iconStyle}/>
                    </Button>
                    <Input 
                        placeholder='대화 내용을 입력하세요.' 
                        style={styles.InputChat} 
                        onChangeText={this._OnChangeInput}
                        maxLength={200}
                        onSubmitEditing={this._OnPressSendButton}
                        ref={(i) => this._input = i }
                    />
                    <Button onPress={this._OnPressSendButton} style={styles.CameraButton}>
                        <Icon name='mail' type='AntDesign' style={styles.iconStyle}/>
                    </Button>
                </Item>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ViewStyle : {
        borderRadius:30,
        borderWidth:2,
        borderColor:'#e0e0e0',
        margin:2
    },
    InputChat : {
        flex:9
    },
    CameraButton : {
        backgroundColor:'white',
        color:'black',
        borderRadius:360,
        margin:5
    },
    iconStyle:{
        color:'#2779ff'
    }
});


export default ChatInputText;