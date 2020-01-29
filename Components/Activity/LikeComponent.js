import React from 'react';
import {Thumbnail,Container} from 'native-base';
import {View,Text,StyleSheet} from 'react-native';
class LikeComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {activity} = this.props;
        
        return(
            <View style={{height: 80,padding:10}}>
            <Text>좋아요 활동</Text>
         </View>
        )
    }
}


export default LikeComponent;