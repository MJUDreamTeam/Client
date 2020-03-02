import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Input,Item,Button,Icon,Text, Thumbnail} from 'native-base';

function makeTimeStamp(){
    var month = new Date().getUTCMonth()+1;
    var day = new Date().getUTCDate();
    var hours = new Date().getHours();
    var minute = new Date().getMinutes();

    return month+'/'+day+' '+hours+':'+minute;
}

class MessageBubble extends React.Component{

    constructor(props){
        super(props);
        this.state={
            timeStamp:makeTimeStamp()
        }
    }

    render(){
        return(
            <View style = {styles.ViewStyle}>
                <Thumbnail small source={{uri: 'https://news.kbs.co.kr/data/news/2017/01/25/3417539_Ec3.jpg'}} style ={styles.ThumbnailStyle}/>
                <Text style = {styles.TextStyle}>
                    {this.props.DialogText} 
                </Text>
                <Text style = {styles.TimeStampStyle}> {this.state.timeStamp} </Text> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewStyle:{
        flexDirection:'row',
        flex:1,
        color:'black',
        alignItems:'center',
    },
    ThumbnailStyle:{
        marginHorizontal:10,
    },
    TextStyle:{
        padding:10,
        backgroundColor:'white',
        borderRadius:20,
        margin:5,
        borderColor:'#e0e0e0',
        borderWidth:1,
        alignItems:'flex-start'
    },
    TimeStampStyle:{
        fontSize:10,
        marginTop:20,
        color:'#b6b6b6'
    }
});

export default MessageBubble;