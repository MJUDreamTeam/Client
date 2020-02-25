import React from 'react';
import {Thumbnail,Container} from 'native-base';
import {View,Text,StyleSheet} from 'react-native';
class LikeComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {activity} = this.props;
        const otherImage = activity.otherThumbnail;
        const myPost = activity.myPost;
       
        return(<View style= {style.container}>
                <View style= {style.thumbnail}>
                    <Thumbnail source={{uri: otherImage}} />
                </View>
                <View style= {style.content}>
                    <Text>
                        <Text>
                            {activity.likePersonList[0]}님, {activity.likePersonList[1]}님 외 {activity.likeNum}명이 회원님의 사진을 좋아합니다. 
                        </Text>
                        <Text style = {{color: '#595959', fontSize: 12}}>
                            {activity.date}주
                        </Text>
                    </Text>
                </View>
                <View style= {style.thumbnail}>
                    <Thumbnail square source={{uri: myPost}} />
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
        flex: 4,
        padding: 2,
    },
})

export default LikeComponent;