import React from 'react';
import {Thumbnail,container} from "native-base";
import {View,Text,StyleSheet} from 'react-native';
class FollowComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {activity} = this.props;
        
        return(
            <View style={{height: 80, padding:10}}>
               <Text>팔로우 활동</Text>
            </View>
        )
    }
}

export default FollowComponent;