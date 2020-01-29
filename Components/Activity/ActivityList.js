import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Content, Icon, Thumbnail} from 'native-base';
import CommentComponent from './CommentComponent';
import FollowComponent from './FollowComponent';
import LikeComponent from './LikeComponent';
import RecommendComponent from './RecommendComponent';

class ActivityList extends React.Component{
    constructor(props){
        super(props);

        //이 부분은 서버에서 가져올 활동 내역들 임시 적기, 서버에서 최신순으로 주기
        //date는 나중에 현재시간-올린시간 해서 사용하기
        this.state = {
            /*
                type 0:좋아요 1:댓글 2:팔로우 3:지인추천
                likePersonList는 최신 2명까지
            */
            myActivities: [
                {type: 0, otherThumbnail: "https://rdd9223.github.io/assets/images/profile.jpg", 
                likePersonList: ["im.se_0","americano__"], likeNum: 38, date: 1, 
                myPost: "https://rdd9223.github.io/assets/images/profile.jpg"},
                {type: 0, otherThumbnail: "https://rdd9223.github.io/assets/images/profile.jpg", 
                likePersonList: ["__se._.0","garomi__"], likeNum: 40, date: 2, 
                myPost: "https://avatars2.githubusercontent.com/u/52193680?s=64&v=4"},
                {type: 1, otherThumbnail: "https://avatars3.githubusercontent.com/u/49789734?s=80&v=4", 
                otherName: "im.se_0", content: "사진 주소가 너무 많이 필요해서", date: 3, 
                myPost: "https://rdd9223.github.io/assets/images/profile.jpg"},
                {type: 3, recommendThumbnail: "https://rdd9223.github.io/assets/images/profile.jpg", 
                recommendPersonList: ["lion","tiger"], date: 3},
                {type: 1, otherThumbnail: "https://avatars2.githubusercontent.com/u/52193680?s=64&v=4"},
                {type: 2, otherThumbnail: "https://rdd9223.github.io/assets/images/profile.jpg", 
                otherName: "react_22",date: 5, isFollowed: false},
                {type: 2, otherThumbnail: "https://rdd9223.github.io/assets/images/profile.jpg", 
                otherName: "native_3333",date: 7, isFollowed: false},
                {type: 3, recommendThumbnail: "https://avatars2.githubusercontent.com/u/55945829?s=64&v=4", 
                recommendPersonList: ["bird","dog"], date: 10},
                {type: 1, otherThumbnail: "https://rdd9223.github.io/assets/images/profile.jpg", 
                otherName: "garomi__", content: "사진좀 빌리겟음다...... ㅎㅎ 멍멍이 가로밍", 
                date: 15, myPost: "https://avatars2.githubusercontent.com/u/55945829?s=64&v=4"},
                {type: 0, otherThumbnail: "https://rdd9223.github.io/assets/images/profile.jpg", likePersonList: ["twosome_place","kakao"], likeNum: 130, date: 20, 
                myPost: "https://rdd9223.github.io/assets/images/profile.jpg"},
            ]
        }
    }

    //실제 보여지는 부분
    render(){
        const { myActivities } = this.state;
         //좋아요, 댓글 컴포넌트의 사진, 설명, 사진 비율
         //팔로우의 컴포넌트의 사진, 설명, 팔로우버튼 비율
         //친구추천의 사진, 설명 비율 
        return (
            <View style={{marginTop: 25, width: "100%"}}>
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                    {myActivities.map(activity => {
                        if (activity.type === 0) { //좋아요
                            return (
                                <LikeComponent activity={activity}/>
                            )
                        } else if (activity.type === 1) { //댓글
                            return (
                                <CommentComponent activity={activity}/>
                            )
                        } else if (activity.type === 2) { //팔로우
                            return (
                                <FollowComponent activity={activity}/>
                            )
                        } else if (activity.type === 3) { //지인추천
                            return (
                                <RecommendComponent activity={activity}/>
                            )
                        }
                    })}
                </ScrollView>
            </View>
        )
    }
}

export default ActivityList;