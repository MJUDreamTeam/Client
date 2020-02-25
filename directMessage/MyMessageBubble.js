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

class MyMessageBubble extends React.Component{

    constructor(props){
        super(props);
        this.state={
            timeStamp:makeTimeStamp()
        }
    }

    render(){
        return(
            <View style = {styles.ViewStyle}>
                <Text style = {styles.TimeStampStyle}> {this.state.timeStamp} </Text> 
                <Text style = {styles.TextStyle}>{this.props.DialogText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewStyle:{
        flexDirection:'row',
        flex:1,
        color:'black',
        alignItems:'flex-end',
    },
    ThumbnailStyle:{
        marginHorizontal:10,
    },
    TextStyle:{
        padding:10,
        backgroundColor:'#e0e0e0',
        borderRadius:20,
        margin:5,
        textAlign:'auto',
        flexShrink:1
    }, 
    TimeStampStyle:{
        fontSize:10,
        marginTop:20,
        color:'#b6b6b6'
    }
});

export default MyMessageBubble;