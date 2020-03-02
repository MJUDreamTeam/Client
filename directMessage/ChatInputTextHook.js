import React,{useState,useEffect,useRef,createRef} from 'react';
import {KeyboardAvoidingView,TextInput,StyleSheet,View,FlatList} from 'react-native';
import {Input,Item,Button,Icon,Text,Container,Header,Left,Right,Body,Title, Thumbnail} from 'native-base';

// navigation prop 받아서 사용하기위해 import
import {useNavigation} from '@react-navigation/native';

function ChatInputTextHook(props){

    const [text,setText] = useState('');

    const refContainer = useRef(null);

    const _OnPressCameraButton = () =>{
        props.navigation.navigate('DMCamera');
    }

    const _OnPressSendButton = () =>{
        props.onPress(text);
        refContainer.current.clear();
        setText('');
    }

    return(
        <View style = {styles.ViewStyle}>
                <Item regular style = {styles.ViewStyle}>
                    <Button onPress={_OnPressCameraButton} style={styles.CameraButton}>
                        <Icon name='ios-camera' style ={styles.iconStyle}/>
                    </Button>
                    <TextInput 
                        placeholder='대화 내용을 입력하세요.' 
                        style={styles.InputChat} 
                        onChangeText={(inputText)=> setText(inputText)}
                        maxLength={200}
                        ref={refContainer}
                    />
                    <Button 
                        onPress={_OnPressSendButton}
                        style={styles.CameraButton}>
                        <Icon name='mail' type='AntDesign' style={styles.iconStyle}/>
                    </Button>
                </Item>
        </View>
    );
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

export default ChatInputTextHook;