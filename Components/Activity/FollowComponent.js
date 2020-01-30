import React from 'react';
import {Thumbnail,container} from "native-base";
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import FollowButton from './FollowButton';

class FollowComponent extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const {activity} = this.props;
        const otherImage = activity.otherThumbnail;
        
        return(
            <View style= {style.container}>
                <View style= {style.thumbnail}>
                    <Thumbnail source={{uri: otherImage}} />
                </View>
                <View style= {style.content}>
                    <Text>
                        <Text>
                            {activity.otherName}님이 회원님을 팔로우하기 시작했습니다. 
                        </Text>
                        <Text style = {{color: '#595959', fontSize: 12}}>
                            {activity.date}주
                        </Text>
                    </Text>
                </View>
                <View stype = {style.button}>
                    <FollowButton isFollow={activity.isFollowing}/>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        height: 80, padding:10,
    },
    thumbnail:{
        flex: 1,
        padding: 4,
    },
    content: {
        flex: 3.6,
        padding: 2,
    },
    button: {
        flex: 2,
    },
})
export default FollowComponent;